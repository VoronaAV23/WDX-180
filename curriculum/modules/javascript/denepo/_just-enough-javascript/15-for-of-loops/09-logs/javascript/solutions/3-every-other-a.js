"use strict";

let language = " j a v a s c r i p t";

let logIt = "";

for (let character of language) {
  if (character !== " ") {
    logIt = logIt + character;
  }
}
for (let char of logIt){
  console.log(char);
}

