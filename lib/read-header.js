function hex2ascii(string) {
    const hex = string.toString();
    let str = '';
    for (let i = 0; i < hex.length; i += 2) {
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    return str;
}

function findFileType(buffer) {
    let hexStr = buffer.readUInt16BE(0).toString(16);
    let code = hex2ascii(hexStr);
    return code;
}

module.exports = {
    findFileType
};