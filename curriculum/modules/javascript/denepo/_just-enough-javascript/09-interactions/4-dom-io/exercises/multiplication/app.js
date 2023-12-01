import {
  whenFormDataChanges,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('calculator', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read user values ---
  let number1 = readNumber('left');
  console.log(number1);
    let number2 = readNumber('right');
  console.log(number2);
   // --- multiply the numbers ---

   let repeated = number1 * number2;
  console.log(repeated)
  // --- create a message ---
   let message = number1 + ' * ' + number2 + ' === ' + repeated;
  // --- display the message ---
  displayString('product', message);
});
