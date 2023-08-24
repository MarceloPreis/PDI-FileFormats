const fs = require('fs');

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
        let matrix = []
        for (var i = 0; i < this.height; ++i) {
            matrix[i] = []
            for (var j = 0; j < this.width; ++j) {
                matrix[i][j] = this.randomPixel()
            }
        }

        this.bin = matrix
    }

    save() {
        let bin = this.stringfyBin()   

        fs.writeFile(`${this.fileName}.${this.extension}`, bin, (err, data) => console.log(err || `Arquivo "${this.fileName}.${this.extension}" criado com sucesso!`)); 
    }

    stringfyBin() {
        return `${this.type}\n${this.width} ${this.height} ${this.intensity || ''}\n${this.bin.flat().join(' ')}`
    }
}