import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('to-sort', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  let inputA = readString('string-a');
  let inputB = readString('string-b')

 let message;
  // --- sort them input by length ---
 if (inputA.length !== inputB.length) {
    message = inputA + ', ' + inputB;
 } else if (inputA.length === inputB.length){
   message = inputA + '\n' + inputB;
 }
  // --- display the sorted strings ---
  displayString('sorted', message)
});
