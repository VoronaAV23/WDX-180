import {
  whenFormDataChanges,
  readString,
  readBoolean,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('search-input', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  let input1 = readString('text');
  let input2 = readString('query');
  let input3 = readBoolean('sensitive');
  
  let result;
  // --- do the search ---
  if (input3 === true){
    if(input1.includes(input2)){
      result = "yes";
    }else {
       result = "no";
    }
  } else if (input1.toLowerCase().includes(input2.toLowerCase())) {
    result = "yes";
  } else{
    result = "no";
  }

  // --- display the search results ---
  displayString('search-result', result)
});
