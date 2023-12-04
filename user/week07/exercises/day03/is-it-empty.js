
let input = prompt('do whatever you want');
let message = 'your input is ';
if (input === null){
  message = message + 'null';
} else {
 let maybeNot = '';
 if (input.length !==0){
   maybeNot = 'not ';
 }
  message = message + maybeNot + 'empty';
}
alert(message);