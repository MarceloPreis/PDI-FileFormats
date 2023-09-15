const Image = require('./Image')

module.exports = class Pbm extends Image {
    constructor(data) {
        super('P1', data.fileName, data.height, data.width, 'pgm', null, data.bin)
    }

    randomPixel() {
        return Math.floor(Math.random() * 2)
    }

    /**
     * 
     * @param {Image} image 
     * @param {Number} limiar 
     */
    createFromPgm(image, limiar) {
        this.bin = image.forEachPixel((pixel) => {
            return pixel <= limiar ? 0 : 1 
        })
    }
}