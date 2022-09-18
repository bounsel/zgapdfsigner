/**
 * the base point of x, y is top left corner.
 * @typedef
 * {{
 *    x: number,
 *    y: number,
 *    w: number,
 *    h: number,
 * }}
 */
var SignAreaInfo;
/**
 * @typedef
 * {{
 *    area: SignAreaInfo,
 *    pageidx: (number|undefined),
 *    imgData: (Uint8Array|ArrayBuffer|string|undefined),
 *    imgType: (string|undefined),
 *    text: (string|undefined),
 *    fontData: (PDFLib.StandardFonts|Uint8Array|ArrayBuffer|string|undefined),
 *    img: (PDFLib.PDFImage|undefined),
 *    font: (PDFLib.PDFFont|undefined),
 * }}
 */
var SignDrawInfo;
/**
 * @typedef
 * {{
 *    p12cert: (Uint8Array|ArrayBuffer|string),
 *    pwd: string,
 *    reason: (string|undefined),
 *    location: (string|undefined),
 *    contact: (string|undefined),
 *    signdate: (Date|undefined),
 *    signame: (string|undefined),
 *    drawinf: (SignDrawInfo|undefined),
 * }}
 */
var SignOption;