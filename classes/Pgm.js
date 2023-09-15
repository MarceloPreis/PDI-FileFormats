const Image = require('./Image')

module.exports = class Pgm extends Image {
    constructor(data) {
        super('P2', data.fileName, data.height, data.width, 'pgm', data.intensity, data.bin)
    }

    randomPixel() {
        return Math.floor(Math.random() * this.intensity + 1)
    }

    intensityConversion(newIntensity) {
        const proportion = newIntensity / (this.intensity || 255)
        this.bin = this.bin.map(line => line.map(pixel => Math.floor(pixel * proportion)))
        this.intensity = newIntensity
    }

    /**
     * 
     * @param {number} newIntensity 
     */
    upWhiteIntensity(newIntensity) {
        const proportion = 1 + newIntensity / 100
        this.bin = this.forEachPixel((pixel) => {
            let newPixel =  Math.floor(pixel * proportion)

            if (newPixel > this.intensity)
                newPixel = this.intensity

            return newPixel
        })
    }

    negative() {
        const intensity = this.intensity ?? 255
        this.bin = this.forEachPixel((pixel) => {
            return intensity - pixel
        })
    }

}