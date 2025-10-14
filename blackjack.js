// Mypage casino web app with Blackjack game
const http = require('http');
const port = 8000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>🎰 Wai Fan's Casino - Blackjack 🎲</title>
      <style>
        body {
          font-family: 'Poppins', sans-serif;
          background: radial-gradient(circle at center, #004400, #001a00);
          color: #fff;
          text-align: center;
          margin: 0;
          padding: 0;
        }
        header {
          background-color: gold;
          color: black;
          padding: 15px;
          font-size: 1.8em;
          font-weight: bold;
          letter-spacing: 2px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.5);
        }
        h2 {
          margin-top: 30px;
          color: #ffcc00;
          text-shadow: 0 0 10px #ffcc00;
        }
        #table {
          background: #006600;
          border: 5px solid #ffd700;
          border-radius: 20px;
          width: 600px;
          height: 400px;
          margin: 30px auto;
          box-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
          position: relative;
          padding-top: 20px;
        }
        #dealer, #player {
          margin: 10px;
          font-size: 1.2em;
        }
        #message {
          font-size: 1.3em;
          margin-top: 10px;
          font-weight: bold;
        }
        button {
          background: gold;
          border: none;
          color: black;
          font-size: 1em;
          padding: 10px 20px;
          margin: 10px;
          border-radius: 10px;
          cursor: pointer;
          transition: 0.2s;
        }
        button:hover {
          background: #fff04f;
          transform: scale(1.05);
        }
        footer {
          margin-top: 20px;
          opacity: 0.8;
          font-size: 0.9em;
        }
      </style>
    </head>
    <body>
      <header>🎰 Wai Fan’s Casino 🎲</header>
      <h2>Blackjack Table</h2>
      <div id="table">
        <div id="dealer">Dealer: <span id="dealer-cards"></span></div>
        <div id="player">Player: <span id="player-cards"></span></div>
        <p id="message">Press "Deal" to start</p>
        <div>
          <button id="deal">Deal</button>
          <button id="hit" disabled>Hit</button>
          <button id="stand" disabled>Stand</button>
        </div>
      </div>
      <footer>© 2025 Wai Fan Casino</footer>

      <script>
        const dealBtn = document.getElementById('deal');
        const hitBtn = document.getElementById('hit');
        const standBtn = document.getElementById('stand');
        const playerCards = document.getElementById('player-cards');
        const dealerCards = document.getElementById('dealer-cards');
        const message = document.getElementById('message');

        let deck = [];
        let playerHand = [];
        let dealerHand = [];

        function createDeck() {
          const suits = ['♠', '♥', '♦', '♣'];
          const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
          deck = [];
          for (let s of suits) {
            for (let v of values) {
              deck.push({suit: s, value: v});
            }
          }
        }

        function getCardValue(card) {
          if (['J','Q','K'].includes(card.value)) return 10;
          if (card.value === 'A') return 11;
          return parseInt(card.value);
        }

        function calculateTotal(hand) {
          let total = hand.reduce((sum, card) => sum + getCardValue(card), 0);
          let aces = hand.filter(c => c.value === 'A').length;
          while (total > 21 && aces > 0) {
            total -= 10;
            aces--;
          }
          return total;
        }

        function drawCard() {
          return deck.splice(Math.floor(Math.random() * deck.length), 1)[0];
        }

        function updateDisplay() {
          playerCards.textContent = playerHand.map(c => c.value + c.suit).join(' ');
          dealerCards.textContent = dealerHand.map(c => c.value + c.suit).join(' ');
        }

        function checkWinner() {
          const playerTotal = calculateTotal(playerHand);
          const dealerTotal = calculateTotal(dealerHand);
          if (playerTotal > 21) return 'You busted! Dealer wins.';
          if (dealerTotal > 21) return 'Dealer busts! You win!';
          if (playerTotal === dealerTotal) return 'Push (Draw).';
          if (playerTotal > dealerTotal) return 'You win!';
          return 'Dealer wins!';
        }

        dealBtn.addEventListener('click', () => {
          createDeck();
          playerHand = [drawCard(), drawCard()];
          dealerHand = [drawCard(), drawCard()];
          updateDisplay();
          message.textContent = 'Your move!';
          dealBtn.disabled = true;
          hitBtn.disabled = false;
          standBtn.disabled = false;
        });

        hitBtn.addEventListener('click', () => {
          playerHand.push(drawCard());
          updateDisplay();
          if (calculateTotal(playerHand) > 21) {
            message.textContent = 'You busted! Dealer wins.';
            hitBtn.disabled = true;
            standBtn.disabled = true;
            dealBtn.disabled = false;
          }
        });

        standBtn.addEventListener('click', () => {
          while (calculateTotal(dealerHand) < 17) {
            dealerHand.push(drawCard());
          }
          updateDisplay();
          message.textContent = checkWinner();
          hitBtn.disabled = true;
          standBtn.disabled = true;
          dealBtn.disabled = false;
        });
      </script>
    </body>
    </html>
  `);
});

server.listen(port, () => {
  console.log('Server running at http://localhost:8000');
});
