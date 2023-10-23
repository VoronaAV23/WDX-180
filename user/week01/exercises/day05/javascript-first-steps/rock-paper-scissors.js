 // YOUR CODE HERE >>
  let move = prompt ("Make your move: rock, paper or scissors").toLowerCase();

  // Function that returns a random move, e.g. rock, paper, scissors:
  function getRandomMove(){
  let computer =  Math.floor( Math.random() * 3 );
 if (computer === 0){
    return "rock";   
 }else if (computer === 1){
    return "paper";
 }else {
    return "scissors";
 }
  } 
     
  // Given a move, (e.g. rock, paper, scissors) and a random computer move. Returns the result which must be strictly one of the following: "won", "lost", "draw"
  function checkMove( move, computerMove ){
    if (computerMove === move){
        return "draw";
    } else if (move === "rock"){
        if (computerMove === "paper"){
            return "lost";
    } else {
        return "won";
    } 
   } else if (move === "paper"){
        if (computerMove === "rock"){
            return "won";
        } else {
            return "lost";
    } 
} else if (move === "scissors"){
    if (computerMove === "rock"){
        return "lost";
    } else {
        return "won";
    }

        }else {
            return "invalid move";
        }
    }

    const computerMove = getRandomMove() 
    const gameResult = checkMove(move, computerMove);
    alert(gameResult);

  // Rest of your code here...

  // << YOUR CODE HERE

  // Don't worry about the code below. It's just there to test your code above.
  const drawn = new Set();
  for ( let i = 0; i < 100; i++ ){
    const randomMove = getRandomMove();
    drawn.add(randomMove);
    const oneOfTheThreeMoves = randomMove === 'rock' || randomMove === 'paper' || randomMove === 'scissors';
    if ( !oneOfTheThreeMoves ){
      throw new Error("Ops! Expected rock, paper or scissors, instead got " + randomMove);
    }
  }

  if ( !drawn.has("rock") || !drawn.has("paper") || !drawn.has("scissors") ){
    throw new Error("Ops! Did not find all three moves in the results!");
  }

  const gameResult1 = checkMove("rock", "rock");
  console.log("Game Result 1: ", gameResult1); // Should be draw

  const gameResult2 = checkMove("rock", "paper");
  console.log("Game Result 2: ", gameResult2); // Should be lost

  const gameResult3 = checkMove("rock", "scissors");
  console.log("Game Result 3: ", gameResult3); // Should be won
  
  const gameResult4 = checkMove("paper", "paper");
  console.log("Game Result 4: ", gameResult4); // Should be draw

  const gameResult5 = checkMove("paper", "scissors");
  console.log("Game Result 5: ", gameResult5); // Should be lost

  const gameResult6 = checkMove("paper", "rock");
  console.log("Game Result 6: ", gameResult6); // Should be won

  const gameResult7 = checkMove("scissors", "scissors");
  console.log("Game Result 7: ", gameResult7); // Should be draw

  const gameResult8 = checkMove("scissors", "rock");
  console.log("Game Result 8: ", gameResult8); // Should be lost

  const gameResult9 = checkMove("scissors", "paper");
  console.log("Game Result 9: ", gameResult9); // Should be won

  const gameResult10 = checkMove("pencil", "rock");
  console.log("Game Result 10: ", gameResult10); // Should be invalid move

  try {
    if (global) {
      global.getRandomMove = getRandomMove;
      global.checkMove = checkMove;
    }
  } catch (e) {}