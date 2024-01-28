// annonymous objects = Objects without a name
// Not directly refernced
// Less syntax> No need for unique names

class Card {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
  }
}

// let card1 = new Card("A", "Hearts");
// let card2 = new Card("A", "Clubs");
// let card3 = new Card("A", "Spades");
// let card4 = new Card("A", "Diamond");
// let card5 = new Card("2", "Hearts");
// let card6 = new Card("2", "Clubs");
// let card7 = new Card("2", "Spades");
// let card8 = new Card("2", "Diamond");

// let cards = [card1, card2, card3, card3, card4, card5, card6, card7, card8];

let cards = [
  new Card("A", "Hearts"),
  new Card("A", "Clubs"),
  new Card("A", "Spades"),
  new Card("A", "Diamond"),
  new Card("2", "Hearts"),
  new Card("2", "Clubs"),
  new Card("2", "Spades"),
  new Card("2", "Diamond"),
];

console.log(cards[7].value + cards[7].suite);
console.log(cards[0].value + cards[0].suit);

cards.forEach((card) => console.log(`${card.value} $Pcard.suit`));
