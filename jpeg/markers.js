/**
  * JPEG Markers
  * References:
  * https://en.wikipedia.org/wiki/JPEG#Syntax_and_structure
  * https://www.disktuna.com/list-of-jpeg-markers/
  */

const markers = new Map()

markers.set(0xFF01, {
  hex: 0xFF01,
  marker: 'TEM',
  name: 'Temporary private use in arithmetic coding',
  description: '',
  length: 0
})

markers.set(0xFFC0, {
  hex: 0xFFC0,
  marker: 'SOF0',
  name: 'Start of Frame',
  description: 'Baseline DCT',
})

markers.set(0xFFC1, {
  hex: 0xFFC1,
  marker: 'SOF1',
  name: 'Start of Frame',
  description: 'Extended Sequential DCT',
})

markers.set(0xFFC2, {
  hex: 0xFFC2,
  marker: 'SOF2',
  name: 'Start of Frame',
  description: 'Progressive DCT'
})

markers.set(0xFFC3, {
  hex: 0xFFC3,
  marker: 'SOF3',
  name: 'Start of Frame',
  description: 'Lossless Sequential'
})

markers.set(0xFFC4, {
  hex: 0xFFC4,
  marker: 'DHT',
  name: 'Define Huffman Table(s)',
  description: ''
})

markers.set(0xFFC5, {
  hex: 0xFFC5,
  marker: 'SOF5',
  name: 'Start of Frame',
  description: 'Differential Sequential DCT'
})

markers.set(0xFFC6, {
  hex: 0xFFC6,
  marker: 'SOF6',
  name: 'Start of Frame',
  description: 'Differential Progressive DCT'
})

markers.set(0xFFC7, {
  hex: 0xFFC7,
  marker: 'SOF7',
  name: 'Start of Frame',
  description: 'Differential Lossless Sequential'
})

markers.set(0xFFC8, {
  hex: 0xFFC8,
  marker: 'JPG',
  name: 'Reserved for JPEG extensions',
  description: ''
})

markers.set(0xFFC9, {
  hex: 0xFFC9,
  marker: 'SOF9',
  name: 'Start of Frame',
  description: 'Extended Sequential DCT, Arithmetic Coding'
})

markers.set(0xFFCA, {
  hex: 0xFFCA,
  marker: 'SOF10',
  name: 'Start of Frame',
  description: 'Progressive DCT, Arithmetic Coding'
})

markers.set(0xFFCB, {
  hex: 0xFFCB,
  marker: 'SOF11',
  name: 'Start of Frame',
  description: 'Lossless Sequential, Arithmetic Coding'
})

markers.set(0xFFCC, {
  hex: 0xFFCC,
  marker: 'DAC',
  name: 'Define Arithmetic Coding(s)',
  description: ''
})

markers.set(0xFFCD, {
  hex: 0xFFCD,
  marker: 'SOF13',
  name: 'Start of Frame',
  description: 'Differential Sequential DCT, Arithmetic Coding'
})

markers.set(0xFFCE, {
  hex: 0xFFCE,
  marker: 'SOF14',
  name: 'Start of Frame',
  description: 'Differential Progressive DCT, Arithmetic Coding'
})

markers.set(0xFFCF, {
  hex: 0xFFCF,
  marker: 'SOF15',
  name: 'Start of Frame',
  description: 'Differential Lossless Sequential, Arithmetic Coding'
})

markers.set(0xFFD0, {
  hex: 0xFFD0,
  marker: 'RST0',
  name: 'Restart Interval Termination',
  description: '',
  length: 0
})

markers.set(0xFFD1, {
  hex: 0xFFD1,
  marker: 'RST1',
  name: 'Restart Interval Termination',
  description: '',
  length: 0
})

markers.set(0xFFD2, {
  hex: 0xFFD2,
  marker: 'RST2',
  name: 'Restart Interval Termination',
  description: '',
  length: 0
})

markers.set(0xFFD3, {
  hex: 0xFFD3,
  marker: 'RST3',
  name: 'Restart Interval Termination',
  description: '',
  length: 0
})

markers.set(0xFFD4, {
  hex: 0xFFD4,
  marker: 'RST4',
  name: 'Restart Interval Termination',
  description: '',
  length: 0
})

markers.set(0xFFD5, {
  hex: 0xFFD5,
  marker: 'RST5',
  name: 'Restart Interval Termination',
  description: '',
  length: 0
})

markers.set(0xFFD6, {
  hex: 0xFFD6,
  marker: 'RST6',
  name: 'Restart Interval Termination',
  description: '',
  length: 0
})

markers.set(0xFFD7, {
  hex: 0xFFD7,
  marker: 'RST7',
  name: 'Restart Interval Termination',
  description: '',
  length: 0
})

markers.set(0xFFD8, {
  hex: 0xFFD8,
  marker: 'SOI',
  name: 'Start of Image',
  description: '',
  length: 0
})

markers.set(0xFFD9, {
  hex: 0xFFD9,
  marker: 'EOI',
  name: 'End of Image',
  description: '',
  length: 0
})

markers.set(0xFFDA, {
  hex: 0xFFDA,
  marker: 'SOS',
  name: 'Start of Scan',
  description: ''
})

markers.set(0xFFDB, {
  hex: 0xFFDB,
  marker: 'DQT',
  name: 'Define Quantization Table(s)',
  description: ''
})

markers.set(0xFFDC, {
  hex: 0xFFDC,
  marker: 'DNL',
  name: 'Define Number of Lines',
  description: ''
})

markers.set(0xFFDD, {
  hex: 0xFFDD,
  marker: 'DRI',
  name: 'Define Restart Interval',
  description: '',
  length: 4
})

markers.set(0xFFDE, {
  hex: 0xFFDE,
  marker: 'DHP',
  name: 'Define Hierarchical Progression',
  description: ''
})

markers.set(0xFFDF, {
  hex: 0xFFDF,
  marker: 'EXP',
  name: 'Expand Reference Component(s)',
  description: ''
})

markers.set(0xFFE0, {
  hex: 0xFFE0,
  marker: 'APP0',
  name: 'Application Segment',
  description: 'JFIF – JFIF JPEG image, AVI1 – Motion JPEG (MJPG)'
})

markers.set(0xFFE1, {
  hex: 0xFFE1,
  marker: 'APP1',
  name: 'Application Segment',
  description: 'EXIF Metadata, TIFF IFD format, JPEG Thumbnail (160×120), Adobe XMP'
})

markers.set(0xFFE2, {
  hex: 0xFFE2,
  marker: 'APP2',
  name: 'Application Segment',
  description: 'ICC color profile, FlashPix'
})

markers.set(0xFFE3, {
  hex: 0xFFE3,
  marker: 'APP3',
  name: 'Application Segment',
  description: 'JPS Tag for Stereoscopic JPEG images'
})

markers.set(0xFFE4, {
  hex: 0xFFE4,
  marker: 'APP4',
  name: 'Application Segment',
  description: ''
})

markers.set(0xFFE5, {
  hex: 0xFFE5,
  marker: 'APP5',
  name: 'Application Segment',
  description: ''
})

markers.set(0xFFE6, {
  hex: 0xFFE6,
  marker: 'APP6',
  name: 'Application Segment',
  description: 'NITF Lossles profile'
})

markers.set(0xFFE7, {
  hex: 0xFFE7,
  marker: 'APP7',
  name: 'Application Segment',
  description: ''
})

markers.set(0xFFE8, {
  hex: 0xFFE8,
  marker: 'APP8',
  name: 'Application Segment',
  description: ''
})

markers.set(0xFFE9, {
  hex: 0xFFE9,
  marker: 'APP9',
  name: 'Application Segment',
  description: ''
})

markers.set(0xFFEA, {
  hex: 0xFFEA,
  marker: 'APP10',
  name: 'Application Segment',
  description: 'ActiveObject (multimedia messages / captions)'
})

markers.set(0xFFEB, {
  hex: 0xFFEB,
  marker: 'APP11',
  name: 'Application Segment',
  description: 'HELIOS JPEG Resources (OPI Postscript)'
})

markers.set(0xFFEC, {
  hex: 0xFFEC,
  marker: 'APP12',
  name: 'Application Segment',
  description: 'Picture Info (older digicams), Photoshop Save for Web: Ducky'
})

markers.set(0xFFED, {
  hex: 0xFFED,
  marker: 'APP13',
  name: 'Application Segment',
  description: 'Photoshop Save As: IRB, 8BIM, IPTC'
})

markers.set(0xFFEE, {
  hex: 0xFFEE,
  marker: 'APP14',
  name: 'Application Segment',
  description: 'Usually contains Adobe data'
})

markers.set(0xFFEF, {
  hex: 0xFFEF,
  marker: 'APP15',
  name: 'Application Segment',
  description: ''
})

markers.set(0xFFF0, {
  hex: 0xFFF0,
  marker: 'JPG0',
  name: 'Reserved for JPEG extensions',
  description: ''
})

markers.set(0xFFF1, {
  hex: 0xFFF1,
  marker: 'JPG1',
  name: 'Reserved for JPEG extensions',
  description: ''
})

markers.set(0xFFF2, {
  hex: 0xFFF2,
  marker: 'JPG2',
  name: 'Reserved for JPEG extensions',
  description: ''
})

markers.set(0xFFF3, {
  hex: 0xFFF3,
  marker: 'JPG3',
  name: 'Reserved for JPEG extensions',
  description: ''
})

markers.set(0xFFF4, {
  hex: 0xFFF4,
  marker: 'JPG4',
  name: 'Reserved for JPEG extensions',
  description: ''
})

markers.set(0xFFF5, {
  hex: 0xFFF5,
  marker: 'JPG5',
  name: 'Reserved for JPEG extensions',
  description: ''
})

markers.set(0xFFF6, {
  hex: 0xFFF6,
  marker: 'JPG6',
  name: 'Reserved for JPEG extensions',
  description: ''
})

markers.set(0xFFF7, {
  hex: 0xFFF7,
  marker: 'JPG7',
  name: 'Reserved for JPEG extensions',
  description: ''
})

markers.set(0xFFF8, {
  hex: 0xFFF8,
  marker: 'JPG8',
  name: 'Reserved for JPEG extensions',
  description: ''
})

markers.set(0xFFF9, {
  hex: 0xFFF9,
  marker: 'JPG9',
  name: 'Reserved for JPEG extensions',
  description: ''
})

markers.set(0xFFFA, {
  hex: 0xFFFA,
  marker: 'JPG10',
  name: 'Reserved for JPEG extensions',
  description: ''
})

markers.set(0xFFFB, {
  hex: 0xFFFB,
  marker: 'JPG11',
  name: 'Reserved for JPEG extensions',
  description: ''
})

markers.set(0xFFFC, {
  hex: 0xFFFC,
  marker: 'JPG12',
  name: 'Reserved for JPEG extensions',
  description: ''
})

markers.set(0xFFFD, {
  hex: 0xFFFD,
  marker: 'JPG13',
  name: 'Reserved for JPEG extensions',
  description: ''
})

markers.set(0xFFFE, {
  hex: 0xFFFE,
  marker: 'COM',
  name: 'Comment',
  description: ''
})

export { markers }
