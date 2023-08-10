const fs = require('fs');

function createBPM(options) {
    const opt = {
        fileName: 'image',
        height: 400,
        length: 400,
        extension: 'pbm',
        ...options,
    }

    let bin = `P1 \n${opt.height} ${opt.length} \n`
    for (var i = 0; i < opt.height; ++i) {
        for (var j = 0; j < opt.length; ++j) {
            bin += rand(2) + ` `
        }

        bin += '\n'
    }

    fs.writeFile(`${opt.fileName}.${opt.extension}`, bin, (err, data) => console.log(err, data)); 
}

function createPGM(options) {
    const opt = {
        fileName: 'image',
        height: 400,
        length: 400,
        extension: 'pgm',
        intensity: '16',
        ...options,
    }

    let bin = `P2 \n${opt.height} ${opt.length} \n${opt.intensity}\n`
    for (var i = 0; i < opt.height; ++i) {
        for (var j = 0; j < opt.length; ++j) {
            bin += rand(opt.intensity) + ` `
        }
        bin += `\n`
    }

    console.log(bin);

    fs.writeFile(`${opt.fileName}.${opt.extension}`, bin, (err, data) => console.log(err, data))
}

function createPPM (options) {
    const opt = {
        fileName: 'image',
        height: 400,
        length: 400,
        extension: 'ppm',
        intensity: '15',
        ...options,
    }

    let bin = `P3 \n${opt.height} ${opt.length} \n${opt.intensity} \n`
    for (var i = 0; i < opt.height; ++i) {
        for (var j = 0; j < opt.length; ++j) {
            bin += createRandomPixel() + ` `
        }

        bin += `\n`
    }

    fs.writeFile(`${opt.fileName}.${opt.extension}`, bin, (err, data) => console.log(err, data))
}

function createRandomPixel() {
    return [rand(255), rand(255), rand(255)]
}

function rand(max) {
    return Math.floor(Math.random() * max)
}

// createPPM({fileName: 'ppm1000', height: 1000, length: 1000})
createBPM({})
// readFile('./feep.pbm');