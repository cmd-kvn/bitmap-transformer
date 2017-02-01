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

    it('read header and return file type', done => {
        const output = readHeader.findFileType(noPaletteBuffer);
        assert.equal(output, 'BM');
        done();
    });
});