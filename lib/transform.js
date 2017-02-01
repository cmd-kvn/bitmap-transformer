const BitmapHeader = require('./read-header');
const fs = require('fs');

module.exports = class BitmapTransformer {
    constructor(buffer) {
        this.header = new BitmapHeader(buffer);
        this.buffer = buffer;
    }

    transform(transformation) {
        const header = this.header;
        const buffer = this.buffer;

        let offset = header.whereImageStarts;
        while(offset < header.fileSize) {
            const color = {
                b: buffer.readUInt8(offset),
                g: buffer.readUInt8(offset + 1),
                r: buffer.readUInt8(offset + 2)
            };

            const newColor = transformation(color);

            buffer.writeUInt8(newColor.b, offset);
            buffer.writeUInt8(newColor.g, offset + 1);
            buffer.writeUInt8(newColor.r, offset + 2);

            offset += 3;
        }

        return buffer;
    };

    write(fileName, data, cb) {
        fs.writeFile(fileName, data, cb)
    }

};