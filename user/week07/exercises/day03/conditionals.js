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

