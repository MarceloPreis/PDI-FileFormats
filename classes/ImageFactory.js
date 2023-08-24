const Pbm = require('./Pbm')
const Pgm = require('./Pgm')
const fs = require('fs');

module.exports = class ImageFactory {

    create(type, options) {
        return this[`P2`](options)
    }

    read(path) {
        const bin = fs.readFileSync(path).toString().split('\n')
        const type = bin.shift()
        const [height, width, intensity] = bin.shift().split(' ')
        
        return this.create(type , {
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
