const score = document.getElementById("scoreEl");
const dealerCards = document.getElementById("dealersHand");

// Create playerTotal (intially set to 1000 and put in DOM)
let playerTotal = 1000;
score.textContent = `Cash: $${playerTotal}`;

// Create deck
let suits = ["spades", "diamonds", "clubs", "hearts"];
let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

let deck = new Array();

for (let i  = 0; i < suits.length; i++)
{
    for (let x = 0; x < values.length; x++)
    {
        let card = {Value: values[x], Suit: suits[i], Image: `images/${suits[i]}/${values[x]}`};
        deck.push(card);
    }
}


