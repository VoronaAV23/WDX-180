import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('input', () => {
  // debugger;
  console.log('--- form data changed ---');

  let text1 = readString('to-mirror')
  let mirrored='';
  for(let char of text1){
    mirrored = char + mirrored;
  }

 let result = mirrored + ' | ' + text1;
 displayString('output', result)
  // --- display the result ---
});
