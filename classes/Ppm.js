module.exports = class Image {
    constructor(data) {
        super('P3', data.fileName, data.height, data.width, 'ppm', data.intensity, data.bin)
    }

    randomPixel() {
        const rand = (max) => Math.floor(Math.random() * max)
        return [rand(255), rand(255), rand(255)]
    }
}