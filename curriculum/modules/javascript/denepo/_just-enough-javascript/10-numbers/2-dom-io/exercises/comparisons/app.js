// these are the only functions you will need
import {
  whenFormDataChanges,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('nums', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---
  let Linput = readNumber('left-num');
  console.log(Linput);

  let Rinput = readNumber('right-num');
  console.log(Rinput);

  // --- compare the numbers ---

  let result1 = Linput > Rinput;
  let result2 = Linput >= Rinput;
  let result3 = Linput < Rinput;
  let result4 = Linput <= Rinput;
  let result5 = Linput === Rinput;

  // --- create a message
let message1 = Linput + " > " + Rinput + " ---> " + result1; 
let message2 = Linput + " >= " + Rinput + " ---> " + result2;
let message3 = Linput + " < " + Rinput + " ---> " + result3;  
let message4 = Linput + " <= " + Rinput + " ---> " + result4; 
let message5 = Linput + " === " + Rinput + " ---> " + result5; 
let message = message1 + "\n" + message2 + "\n" + message3 + "\n" + message4 + "\n" + message5; 

  // --- display the message ---
  displayString('compared', message)
});
