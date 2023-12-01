// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges("user-words", () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---
  let Noun = readString("noun");
  console.log(Noun);

  let Verb = readString("verb");
  console.log(Verb);

  let Adj = readString("adjective");
  console.log(Adj);

  // --- create a funny sentence ---
  let sentence = "The " + Adj  + " " + Noun + " will "  + Verb;

  // --- display the sentence ---
  displayString('funny-sentence', sentence);
});
