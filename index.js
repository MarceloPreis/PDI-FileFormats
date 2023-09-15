const ImageFactory = require('./classes/ImageFactory');
const Factory = new ImageFactory();

const image = Factory.read('./images/atividade6/entrada.pgm');
image.fileName = './images/atividade6/newImage_c'
image.negative()
image.save()