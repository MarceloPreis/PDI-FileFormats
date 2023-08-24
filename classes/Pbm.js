const Image = require('./Image')

module.exports = class Pbm extends Image {
    constructor(data) {
        super('P1', data.fileName, data.height, data.width, 'pgm', null, data.bin)
    }

    randomPixel() {
        return Math.floor(Math.random() * 2)
    }
}