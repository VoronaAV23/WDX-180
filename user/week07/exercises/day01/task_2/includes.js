// #todo

'use strict';

console.log('-- using .includes for case-sensitive searching --');

// examples
console.log('JavaScript'.includes('script')); // false
console.log('JavaScript'.includes('Script')); // true
console.log('JavaScript'.includes('vaSc')); // true
console.log('JavaScript'.includes('VAsC')); // false

// exercises
console.log('HackYourFuture'.includes('ckY')); // true
console.log('HackYourFuture'.includes('Future')); // true
console.log('HackYourFuture'.includes('Hack')); // true

console.log('HackYourFuture'.includes('hack')); // false
console.log('HackYourFuture'.includes('cky')); // false
console.log('HackYourFuture'.includes('future')); // false

console.log(' Bye'.includes(' Bye')); // true
console.log('. Car'.includes('. Car')); // true
console.log('+'.includes('+')); // true

console.log('Hi'.includes('hi')); // false
console.log('ROAD'.includes('road')); // false
console.log('imagination'.includes('Ima')); // false
