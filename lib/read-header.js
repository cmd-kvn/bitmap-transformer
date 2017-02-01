const HEADER_SIZE = 14;
const FILE_SIZE_OFFSET = 2;
const IMAGE_OFFSET = 10;
const BITS_PER_PIXEL_OFFSET = 28;
const COLORS_IN_PALETTE_OFFSET = 46;

// function hex2ascii(string) {
//     const hex = string.toString();
//     let str = '';
//     for (let i = 0; i < hex.length; i += 2) {
//         str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
//     }
//     return str;
// }

function isPalette(buffer) {
    let hexStr = buffer.readUInt32LE(COLORS_IN_PALETTE_OFFSET);
    if (hexStr) {
        return true;
    } else {
        return false;
    }
}

function fileSize(buffer) {
    let hexStr = buffer.readUInt32LE(FILE_SIZE_OFFSET);
    return hexStr;
}

function whereImageStarts(buffer) {
    let hexStr = buffer.readUInt32LE(IMAGE_OFFSET);
    return hexStr;
}

function bitsPerPixel(buffer) {
    let hexStr = buffer.readUInt16LE(BITS_PER_PIXEL_OFFSET);
    return hexStr;
}

module.exports = {
    fileSize,
    whereImageStarts,
    isPalette,
    bitsPerPixel
};