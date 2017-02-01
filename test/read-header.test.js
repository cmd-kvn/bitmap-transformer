const assert = require('assert');
const fs = require('fs');
const readHeader = require('../lib/read-header');



describe('read the header of a bitmap file', () => {

    let noPaletteBuffer = null;

    before(done => {
        fs.readFile('./non-palette-bitmap.bmp', (err, data) => {
            if (err) done(err);
            else {
                noPaletteBuffer = data;
                done();
            }

        });
    });

    let paletteBuffer = null;

    before(done => {
        fs.readFile('./palette-bitmap.bmp', (err, data) => {
            if (err) done(err);
            else {
                paletteBuffer = data;
                done();
            }
        });
    });

    it('read header and return file size', done => {
        const output = readHeader.fileSize(noPaletteBuffer);
        assert.equal(output, 30054);
        done();
    });

    it('read header and find the start of the image', done => {
        const output = readHeader.whereImageStarts(noPaletteBuffer);
        assert.equal(output, 54);
        done();
    });

    it('read header and see if there is a color palette', done => {
        const output = readHeader.isPalette(paletteBuffer);
        assert.equal(output, true);
        done();
    });

    it('read header and see size of pixel', done => {
        const output = readHeader.bitsPerPixel(noPaletteBuffer);
        assert.equal(output, 24);
        done();
    });
});