const ImageFactory = require('./classes/ImageFactory');
const Factory = new ImageFactory();

const Image = Factory.read('./images/atividade3/at3_original.pgm');
Image.resizeTo(2160, 3840)
Image.fileName = './images/atividade3/at3_3840x2160'
Image.save()
