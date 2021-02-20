let maxNoBigInt = Number.MAX_SAFE_INTEGER;
let maxNoBigInt2 = 2 ** 53-1
let maxNoBigInt2a = maxNoBigInt2 + 1
let maxNoBigInt2b = maxNoBigInt2 + 2
//let maxNoBigIntNumber = BigInt(Number.MAX_SAFE_INTEGER) + 2;

console.log('Number.MAX_SAFE_INTEGER: ', maxNoBigInt);
console.log('2 ** 53-1: ', maxNoBigInt2);
console.log('+ 1: ' + maxNoBigInt2a);
console.log('+ 2: ' + maxNoBigInt2b);
console.log('BigInt + 2:', BigInt(maxNoBigInt2) + 2n);
console.log('BigInt(2 ** 53 + 2 ** 100): ', BigInt(2 ** 53 + 2 ** 100));
console.log(42n);
console.log('42n == 42 ', 42n == 42);
console.log('42n === 42 ', 42n === 42);
console.log('100 + 25: ', BigInt(100) + 25n);
console.log('100 - 25: ', BigInt(100) - 25n);
console.log('100 / 25: ', BigInt(100) / 25n);
console.log('100 * 25: ', BigInt(100) * 25n);
//console.log('BigInt(Number.MAX_SAFE_INTEGER) + 2: ', maxNoBigIntNumber); // Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions at script.js:5
console.log('42 < 43n : ', 42 < 43n);
console.log('42 > 43n : ', 42 > 43n);
console.log('42 >= 43n : ', 42 >= 43n);
console.log('42 == 43n : ', 42 == 43n);
console.log('42 === 43n : ', 42 === 43n);
//console.log(BigInt(123));
//console.log(BigInt(1.23)); //RangeError
//console.log(BigInt('1.23')); //SyntaxError

//Number.parseInt()
//Number.parseInt(string[, radix])
//BigInt.parseInt(string, radix?)

//console.log(BigInt.asUintN(10,19011n));
