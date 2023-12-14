import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('search-field', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  let charToRemove = readString('character');
  let textToRead = readString('phrase');
  let result = '';
 
  if (charToRemove.length > 1){
  displayString('filtered', 'you can only skip one character at a time');
  }
   // --- remove the character if there is only one ---
  for(let char of textToRead){
    if (char !== charToRemove){
        result = result + char;

      }
}
    
  // --- display the result ---
  displayString('filtered',result)
});
