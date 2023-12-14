"use strict";

let allowed = "arvjstcpi";
let jumble = "3j\n _a__v!,aASs woon c023r\n\t&i pPPPPPPPPPt!!?";
let newstring = "";

for (let char of jumble) {
  if (allowed.includes(char)) {
    newstring = newstring + char;
  }
}

for (let character of newstring)
console.log(character);
