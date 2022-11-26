console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  {
    name: 'Player1',
    hand: null,
    points: 0
  },
  {
    name: 'Player2',
    hand: null,
    points: 0
  },
  {
    name: 'Player3',
    hand: null,
    points: 0
  }
];

var rank = ['A', 'J', 'Q', 'K', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
var suit = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];

function cardDeck() {
  var cards = [];
  for (var i = 0; i < rank.length; i++) {
    for (var m = 0; m < suit.length; m++) {
      var eachCard = { suit: suit[m], rank: rank[i] };
      cards.push(eachCard);
      eachCard = {};
    }
  } return cards;
}

console.log('card deck:', cardDeck());

function shuffleCards(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var n = Math.floor(Math.random() * (i + 1));
    var arr = array[i];
    array[i] = array[n];
    array[n] = arr;
  } return array;
}

console.log('Shuffled cards: ', shuffleCards(cardDeck()));

function dealCards(cardDeck) {
  var cards = [];
  for (var i = 0; i < players.length; i++) {
    cards.push(cardDeck.pop());
    cards.push(cardDeck.pop());
    players[i].hand = cards;
    cards = [];
  } return cardDeck;
}

console.log('Deck after deal cards to players:', dealCards(shuffleCards(cardDeck())));
console.log('Player 1 hand: ', players[0].hand);
console.log('Player 2 hand: ', players[1].hand);
console.log('Player 3 hand: ', players[2].hand);

function calculateScore() {
  for (var i = 0; i < players.length; i++) {
    for (var m = 0; m < players[i].hand.length; m++) {
      if (players[i].hand[m].rank === 'A') {
        players[i].points += 11;
      } else if (players[i].hand[m].rank === 'J' || players[i].hand[m].rank === 'Q' || players[i].hand[m].rank === 'K') {
        players[i].points += 10;
      } else {
        players[i].points += parseInt(players[i].hand[m].rank);
      }
    }
  }
}

calculateScore();
console.log('Points of player 1:', players[0].points);
console.log('Points of player 2:', players[1].points);
console.log('Points of player 3:', players[2].points);

function findWinner() {
  var winnerPlayer = players[0].name;
  var firstPlayer = players[0].points;
  for (var i = 1; i < players.length; i++) {
    if (players[i].points > firstPlayer) {
      winnerPlayer = players[i].name;
    }
  } return winnerPlayer;
}

console.log('The winner is:', findWinner());
