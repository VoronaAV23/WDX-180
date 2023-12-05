let input = prompt('You can type anything you want');
console.log('input:', input);
let output;
if (input === null){
   output = ':('; 
  } else if  (input === ''){
     output = input + ' not even close';
  } else if (input.length >= 1 && input.length <=5){
    output = input + ' better';
  } else if (input.length <= 8){
    output = input + ' almost there';
  } else if (input.length < 10){
     output = input + ' so close';
  } else if (input.length === 10){
    output = input + ' perfect!';
  } else if (input.length > 10){
     output = input + ' too long';
  }

console.log('output:', output);
alert(output);

// example2

/* 
let input = prompt('You can type anything you want');
console.log('input:', input);
let output;
if (input === null){
    output = ':(';
} else if (input.length < 10){
  let remainingLetters = 10 - input.length;
     output =  input + ' is ' + remainingLetters + ' characters too short';
} else if (input.length === 10){
     output = input + ' is ' + 'perfect!';
} else if (input.length > 10){
    remainingLetters = input.length - 10;
    output = input + ' is ' + remainingLetters + ' characters too long';
}

console.log('output:', output);
alert(output);

*/

// example3

/* 
console.log('--- begin program ---');

let text = prompt("Enter the first value");
console.log('text:', text);

let query = prompt("Enter the second value");
console.log('query:', query);

let output;

if ((text === null || text === '') && (query === null || query === '')){
  output = ':(';
} else {
  if (text === '' && query === ''){
    output = '"" includes ""';
  } else if (text === ''){
    output = '"" does not include "' + query + '"';
  } else if (query === ''){
     output = '"'+ text +'"' + ' does not include ""';
  } else if (text.includes(query)){
    output = '"'+ text +'" does include " ' +  query + '"';
  }
}

console.log('output:', output);
alert(output);

console.log('--- end program ---');
*/