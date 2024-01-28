// ternary operator = Shortcut for an 'if/else statement'
// Take 3 operands

// 1. a comdition with ?
// 2. expression if true
// 3. expression if false

// condition ? expIfTrue : expIfFalse

checkWinner(false);

function checkWinner(win) {
  win ? console.log("YOU WIN!") : console.log("YOU LOSE!");
}
