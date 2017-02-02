const HEADER_SIZE = 14;
const FILE_SIZE_OFFSET = 2; // size: 4 bytes, bmp filesize in bytes
const PIXEL_OFFSET = 10; // size: 4 bytes, starting address of the byte where the image can be found
const BITS_PER_PIXEL_OFFSET = 28;
const COLORS_IN_PALETTE = 46;

module.exports = class BitmapHeader {
    constructor(buffer) {
        this.pixelOffset = buffer.readUInt32LE(PIXEL_OFFSET);
        this.bitsPerPixel = buffer.readUInt16LE(BITS_PER_PIXEL_OFFSET);
        this.fileSize = buffer.readUInt32LE(FILE_SIZE_OFFSET);

        const bmpHeaderSize = buffer.readUInt32LE(HEADER_SIZE);
        const totalHeader = HEADER_SIZE + bmpHeaderSize;

        this.isPaletted = this.pixelOffset !== totalHeader;
    }
};