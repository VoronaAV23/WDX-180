import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('input', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input --
  let textToChange = readString('to-reverse');
  let reverse = '';

  // --- reverse this ---
  for (let char of textToChange) {
    reverse = char + reverse;
  }


  // --- display the result ---
  displayString('output', reverse)
});
