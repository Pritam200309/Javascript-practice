// class = a bluprint for creating objects
// define what properties and methods they have
// use a constructer for unique properties

class player {
  score = 0;

  pause() {
    console.log("You paused the game");
  }
  exit() {
    console.log("You exited the game");
  }
}

const player1 = new player();
const player2 = new player();

player1.score += 1;

console.log(player1.score);
console.log(player2.score);

player1.pause();
player2.exit();

player1.exit();
player2.pause();
