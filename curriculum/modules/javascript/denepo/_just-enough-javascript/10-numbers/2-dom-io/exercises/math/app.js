// these are the only functions you will need
import {
  whenFormDataChanges,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('numbers', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---
  let Left = readNumber('left-num');
  let Right = readNumber('right-num');

  // --- do the math ---
  let calculation1 = Left + Right;
  let calculation2 = Left - Right;
  let calculation3 = Left * Right;
  let calculation4 = Left / Right;
  let calculation5 = Left % Right;

  // --- create a message
let message1 = Left + " + " + Right + " ---> " + calculation1; 
let message2 = Left + " - " + Right + " ---> " + calculation2;
let message3 = Left + " * " + Right + " ---> " + calculation3;  
let message4 = Left + " / " + Right + " ---> " + calculation4; 
let message5 = Left + " % " + Right + " ---> " + calculation5; 
let message = message1 + "\n" + message2 + "\n" + message3 + "\n" + message4 + "\n" + message5; 

  // --- display the message ---
  displayString('sum', message)
});
