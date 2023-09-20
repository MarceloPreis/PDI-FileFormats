const Pbm = require('./Pbm')
const Pgm = require('./Pgm')
const Ppm = require('./Ppm')
const fs = require('fs');

module.exports = class ImageFactory {

    create(type, options) {
        return this[type](options)
    }

    read(path) {
        let bin = fs.readFileSync(path).toString().replace(/\r/g, '').split('\n')

        
        const type = bin.shift()
        const [width, height] = bin.shift().split(' ')
        const intensity = bin.shift()
        
        // console.log(bin)
        // process.exit()
        bin = bin.map(line => line.trim().split(' ')).flat()

        return this.create(type , {
            fileName: path,
            height: height,
            width: width,
            intensity: intensity,
            bin: this.getPixels(bin, height, width, type)
        })
    }

    P1(options) {
        return new Pbm(options)
    }

    P2(options) {
        return new Pgm(options)
    }

    P3(options) {
        return new Ppm(options)
    }

    getPixels(bin, height, width, type) {
        let aux = []
        let counter = 0

        if (bin.length == 1)
            bin = bin[0]

        if (typeof bin === 'string')
            bin = bin.split(' ')

        // console.log(height, width, type)
        // process.exit()

        for (let i = 0; i < height; i++) {
            aux[i] = []
            
            for (let j = 0; j < width; j++){ 
                
                if (type === 'P3') {
                    aux[i][j] = [Number(bin[counter]), Number(bin[counter + 1]), Number(bin[counter + 2])]
                    counter = counter + 3
                } else {
                    aux[i][j] = Number(bin[counter])
                    counter++
                }
            }
        }

        return aux
    }
}
