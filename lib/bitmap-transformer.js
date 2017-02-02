const BitmapHeader = require('./bitmap-header');

module.exports = class BitmapTransformer {
    constructor(buffer) {
        this.header = new BitmapHeader(buffer);
        this.buffer = buffer;
        // plus more possible setup
    }

    transform(transformation) {
        const header = this.header;
        const buffer = this.buffer;

        let offset = header.pixelOffset;
        while(offset < header.filesize) {
            
        }
    }
}