import {
  whenFormDataChanges,
  readString,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('search-input', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  let text = readString("text");
  let character = readString("character");
  let index = readNumber("i");

  // --- check the index ---
  let message;
console.log(index)
console.log(character)
console.log(text.indexOf(character))
if (text === "" || character === "") {
    message = "oops! you entered fewer than one character";
 } else if (text.indexOf(character) !== index){
   message = "no";
 } else if (text.indexOf(character) === index) {
   message = "yes";
 }
  // --- display the search results ---
  displayString('search-result', message);
});
