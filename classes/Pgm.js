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
}