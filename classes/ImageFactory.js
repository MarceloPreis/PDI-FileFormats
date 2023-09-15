const Pbm = require('./Pbm')
const Pgm = require('./Pgm')
const fs = require('fs');

module.exports = class ImageFactory {

    create(type, options) {
        return this[type](options)
    }

    read(path) {
        const bin = fs.readFileSync(path).toString().split('\n')
        const type = bin.shift().trim()

        const [height, width, intensity] = bin.shift().split(' ')

        return this.create(type , {
            fileName: path,
            height: height,
            width: width,
            intensity: intensity,
            bin: this.getPixels(bin, height, width)
        })
    }

    P1(options) {
        return new Pbm(options)
    }

    P2(options) {
        return new Pgm(options)
    }

    getPixels(bin, height, width) {
        let aux = []
        let counter = 0

        if (bin.length == 1)
            bin = bin[0]

        if (typeof bin === 'string')
            bin = bin.split(' ')

        for (let i = 0; i < height; i++) {
            aux[i] = []
            
            for (let j = 0; j < width; j++){ 
                aux[i][j] = Number(bin[counter])
                counter++
            }
        }

        return aux
    }
}
