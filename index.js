const ImageFactory = require('./classes/ImageFactory');
const Factory = new ImageFactory();

const Image = Factory.read('./images/atividade3/at3_original.pgm');
Image.resizeTo(7680, 4320)
Image.fileName = 'images/atividade3/at3_7680x4320'
Image.save()
