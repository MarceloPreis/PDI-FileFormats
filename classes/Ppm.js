module.exports = class Image {
    constructor() {
        this.type = 'ppm'
        super();
    }

    randomPixel() {
        const rand = (max) => Math.floor(Math.random() * max)
        return [rand(255), rand(255), rand(255)]
    }
}