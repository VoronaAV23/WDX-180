"use strict";

let backwards = "tpircsavaj";
let reverse = '';
for (let letter of backwards){
  reverse = letter + reverse;
}


let language = reverse;
for (let char of language){
  console.log(char);
}
// use a for-of loop to reverse `backwards`
//  assign the reversed string to `language`

// let language = "";

// log each character in `language`
