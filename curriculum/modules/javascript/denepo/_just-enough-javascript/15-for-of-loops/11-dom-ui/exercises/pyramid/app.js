import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('input', () => {
  console.log('--- form data changed ---');

  let userInput = readString('pyramid-bricks');
  let pyramid = '\n';
  let row = '';
  for (let char of userInput){
    row = row + char;
    pyramid = pyramid + row + "\n";
  }

  displayString('out', pyramid)
});
