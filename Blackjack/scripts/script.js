const score = document.getElementById("scoreEl");
const dealerCards = document.getElementById("dealersHand");
const hitBtn = document.getElementById("hitBtn");
const stayBtn = document.getElementById("stayBtn");
const doubleBtn = document.getElementById("doubleBtn");

// Create playerTotal (intially set to 1000 and put in DOM)
let playerTotal = 1000;
score.textContent = `Cash: $${playerTotal}`;

// Create deck
let suits = ["spades", "diamonds", "clubs", "hearts"];
let card = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] ;
let deck = new Array();
for (let i  = 0; i < suits.length; i++)
{
    for (let x = 0; x < values.length; x++)
    {
        let card = {Value: values[x], Suit: suits[i], Image: `images/${suits[i]}/${values[x]}`};
        deck.push(card);
    }
}


// Draw cards
function drawCard() {
    let randomNum = Math.floor(Math.random() * 52);
    let cardValue = deck[randomNum];
    return cardValue;
}

let playerFirstCard = drawCard().Value;
let playerSecondCard = drawCard().Value;
let playerHandTotal = playerFirstCard + playerSecondCard;

let dealerFirstCard = drawCard();
let dealerSecondCard = drawCard();
let dealerHandTotal = dealerFirstCard.Value + dealerSecondCard.Value;


hitBtn.addEventListener('click', hit());

function hit() {
    drawCard();
    playerHandTotal += cardValue;
    console.log(playerHandTotal);
}






