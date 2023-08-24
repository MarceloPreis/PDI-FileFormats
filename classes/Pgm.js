const Image = require('./Image')

module.exports = class Pgm extends Image {
    constructor(data) {
        super('P2', data.fileName, data.height, data.width, 'pgm', data.intensity, data.bin)
    }

    randomPixel() {
        return Math.floor(Math.random() * this.intensity + 1)
    }

    resizeTo(newHeight, newWidth) {
        const newMatrix = [];
        for (let i = 0; i < newHeight; i++) {
            
            newMatrix[i] = [];
            for (let j = 0; j < newWidth; j++) {
                const originalRow = Math.floor(i * this.height / newHeight);
                const originalCol = Math.floor(j * this.width / newWidth);
                newMatrix[i][j] = this.bin[originalRow][originalCol]
            }
        }

        this.bin = newMatrix
        this.height = newHeight
        this.width = newWidth
    }
}