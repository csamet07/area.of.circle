const arguments = process.argv.slice(2);

let r = arguments[0];
let areaOfCircle =  Math.PI * (r * r);

console.log(`Yarıçapı (${r}) olan dairenin alanı: (${areaOfCircle.toFixed(2)}) şeklinde olmalıdır.`);