const ImageFactory = require('./classes/ImageFactory');
const Factory = new ImageFactory();

// const Image = Factory.read('./images/atividade4/entrada.pgm');
// console.log(Image.bin[0])

const Image = Factory.read('./images/atividade5/newImage.pgm');
Image.intensity = 255
// console.log(Image.intensity)
Image.upWhiteIntensity(20)
// Image.fileName = './images/atividade5/newImage'
Image.save()
