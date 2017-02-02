const HEADER_SIZE_OFFSET = 14;
const FILE_SIZE_OFFSET = 2;
const IMAGE_OFFSET = 10;
const BITS_PER_PIXEL_OFFSET = 28;
const COLORS_IN_PALETTE_OFFSET = 46;

module.exports = class BitmapHeader  {
    constructor(buffer) {
        this.isPalette = buffer.readUInt32LE(COLORS_IN_PALETTE_OFFSET);
        this.fileSize = buffer.readUInt32LE(FILE_SIZE_OFFSET);
        this.whereImageStarts = buffer.readUInt32LE(IMAGE_OFFSET);
        this.bitsPerPixel = buffer.readUInt16LE(BITS_PER_PIXEL_OFFSET);
    }

}
    