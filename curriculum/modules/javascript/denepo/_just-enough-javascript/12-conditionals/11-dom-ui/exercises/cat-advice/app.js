import {
  whenFormDataChanges,
  readBoolean,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-data', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
let like = readBoolean('likes-cats');
let allergic = readBoolean('is-allergic');
let own = readBoolean('owns-one');

let message;
  // --- generate good advice ---
if (like === true && allergic === true && own === true) {
  message = "replace your cat with a stuffed animal";
} else if (like === true && allergic === true) {
  message = "make a friend who has a cat";
} else if (like === true && own === true) {
  message = "you are doing great";
} else if (allergic === true && own === true) {
  message = "rethink your life choices";
} else if (like === true) {
  message = "get a cat";
} else if (allergic === true) {
  message = "you are doing great";
} else if (own === true) {
  message = "rethink your life choices";
} else {
  message = "make your choice";
}


  // --- display advice for the user ---
  displayString('custom-advice', message);
});
