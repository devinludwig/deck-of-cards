
var ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
var suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
var deck = [];

suits.forEach(function(suit) {
	ranks.forEach(function(rank) {
	deck.push(rank + " of " + suit)
});
});
console.log(deck);
