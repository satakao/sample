// decimalライブラリを'npm install decimal.jsをターミナルに入力してでインポートする'
const Decimal = require('decimal.js')
let d1 = new Decimal('0.14');
let d2 = new Decimal('0.28');
console.log(d1.add(d2).toNumber());