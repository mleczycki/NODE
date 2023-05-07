var af = new Buffer(" jaskółki afrykańskiej?");
var eu = new Buffer(" jaskółki europejskiej?");
var question = new Buffer("Jaka jest prędkość");
console.log(Buffer.concat( [question, af]).toString());
console.log(Buffer.concat( [question, eu]).toString());
