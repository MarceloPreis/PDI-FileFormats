const ImageFactory = require('./classes/ImageFactory');
const Factory = new ImageFactory();

const Image = Factory.read('./images/atividade4/entrada.pgm');
Image.intensityConversion(31)
Image.fileName = './images/atividade4/5-bits'
Image.save()
