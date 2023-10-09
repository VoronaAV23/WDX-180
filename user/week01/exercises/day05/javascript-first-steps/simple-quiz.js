let userInput = prompt("Who created JavaScript?\nA. Brendan Eich\nB. Bill Gates\nC. Mark Zuckerberg").toUpperCase();


if (userInput === "A") {
    alert("Correct! Not only did he create JS, the prototype of the language was ready in 10 days!");
} else if (userInput === "B") {
    alert("Nope. He led the development of the Windows Operating System.");
} else if (userInput === "C") {
    alert("Nope. He just came up with the idea for a social network.");
} else {
    alert ("Invalid answer")
}

