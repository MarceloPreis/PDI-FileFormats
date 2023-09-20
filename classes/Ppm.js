const Image = require('./Image')
const Pgm = require('./Pgm')
const collect = require('collect.js')


module.exports = class Ppm extends Image {
    constructor(data) {
        super('P3', data.fileName, data.height, data.width, 'ppm', data.intensity, data.bin)
    }

    randomPixel() {
        const rand = (max) => Math.floor(Math.random() * max)
        return [rand(255), rand(255), rand(255)]
    }

    toPgm() {
        let bin = this.forEachPixel((pixel) => {
            return Math.floor(collect(pixel).avg())
        })

        return new Pgm({
            height: this.height,
            width: this.width,
            intensity: this.intensity,
            bin: bin,
        })
    }

    separateColor(r, g, b) {
        this.bin = this.forEachPixel(pixel => {
            if (r !== false)
                pixel[0] = r
            
            if (g !== false)
                pixel[1] = g

            if (b !== false)
                pixel[2] = b

            return pixel
        })
    }

}