const fs = require('fs');
const collect = require('collect');

module.exports = class Image {
    constructor(type, fileName, height, width, extension, intensity, bin) {
        this.type = type;
        this.fileName = fileName
        this.height = height
        this.width = width
        this.extension = extension
        this.intensity = intensity 
        this.bin = bin
    }

    createRandom() {
        this.bin = this.forEachPixel((pixel) => this.randomPixel())
    }

    save() {
        let bin = this.stringfyBin()   
        fs.writeFile(`${this.fileName}.${this.extension}`, bin, (err, data) => console.log(err || `Arquivo "${this.fileName}.${this.extension}" criado com sucesso!`)); 
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

    stringfyBin() {
        let pixels = this.bin.map(line => {
            if (this.type == 'P3')
                line = line.map(pixel => pixel.join(' '))

            return line.join(' ') + '\n'
        })

        return `${this.type}\n${this.width} ${this.height}\n${this.intensity || ''}\n${pixels.flat().join(' ')}`
    }

    /**
     * 
     * @param {function} callback 
     */
    forEachPixel(callback) {
        return this.bin.map(line => line.map(pixel => callback(pixel)))
    }
}