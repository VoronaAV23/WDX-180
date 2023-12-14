"use strict";

let language = "j a v a s c r i p t ";

let logIt = "";

for (let char of language){
  if (char !== " "){
    logIt = logIt + char;
  }
}

for(let letter of logIt){
  console.log(letter);
}
