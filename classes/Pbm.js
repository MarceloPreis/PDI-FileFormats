const Image = require('./Image')

module.exports = class Pbm extends Image {
    constructor(fileName, height, width, extension, intensity, bin) {
        super('P1', fileName, height, width, 'pbm', false, bin);
    }

    randomPixel() {
        return Math.floor(Math.random() * 2)
    }
}