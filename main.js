// user enters a max number and then trie to guess a random generated number between 1 to max

const max = Number(prompt("Enter max number"));

let random = Math.floor(Math.random() * max) + 1;

let guess = Number(prompt("Guess the numner"));

while (true) {
  if (guess === "quit") {
    console.log("quitting application");
    break;
  } else if (guess < random) {
    guess = Number(prompt("hint : your guess was too small. please try again"));
  } else if (guess > random) {
    guess = Number(prompt("hint : your guess was too large. please try again"));
  } else {
    console.log("you are right!! congrats , random number was ", random);
    break;
  }
}
