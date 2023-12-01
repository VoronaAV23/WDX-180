// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('nametag', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---
  let Fname = readString ('first');
  console.log(Fname);

  let Lname = readString('last');
  console.log(Lname);

  // --- create a greeting ---
  let greeting = "Hello " + Fname + " " + Lname + "!";

  // --- display the greeting ---
  displayString('greeting', greeting);
});
