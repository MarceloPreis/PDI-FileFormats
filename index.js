const ImageFactory = require('./classes/ImageFactory');
const Factory = new ImageFactory();

const image = Factory.read('./images/atividade8/original.ppm');
image.fileName = './images/atividade8/imagem3_b'

image.separateColor(255, 255, false)

image.save()