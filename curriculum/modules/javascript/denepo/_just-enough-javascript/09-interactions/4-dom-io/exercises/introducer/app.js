// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-data', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---
  let first = readString('fn');
  console.log(first);

  let last = readString('ln');
  console.log(last);

  // --- create a message ---
  let message = 'Here we are ' + first + ' ' + last + '.';

  // --- display the message ---
  displayString('greet-field', message);
});
