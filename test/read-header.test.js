const assert = require('assert');
const fs = require('fs');
const BitmapHeader = require('../lib/read-header');



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

    it('reads header', () => {
        const header = new BitmapHeader(noPaletteBuffer);
        assert.equal(header.isPalette, false);
        assert.equal(header.fileSize, 30054);
        assert.equal(header.whereImageStarts, 54);
        assert.equal(header.bitsPerPixel, 24);
    });


});
