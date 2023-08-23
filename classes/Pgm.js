const Image = require('./Image')

module.exports = class Pgm extends Image {
    constructor(fileName, height, width, extension, intensity, bin) {
        super('P2', fileName, height, width, 'pgm', intensity, bin)
    }

    randomPixel() {
        return Math.floor(Math.random() * this.intensity + 1)
    }

    resizeTo(newHeight, newWidth) {
        const newMatrix = [];
        for (let i = 0; i < newHeight; i++) {
            const newRow = [];
            for (let j = 0; j < newWidth; j++) {
                const originalRow = Math.floor(i * this.height / newHeight);
                const originalCol = Math.floor(j * this.width / newWidth);
                newRow.push(this.bin[originalRow][originalCol]);
            }

            newMatrix.push(newRow);
        }

        this.bin = newMatrix
        this.height = newHeight
        this.width = newWidth
    }
}