// MyPage Web App - Casino Theme

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
        <title>Wai Fan's Casino Page</title>
        <style>
          body {
            margin: 0;
            height: 100vh;
            background: radial-gradient(circle at center, #1b1b1b 30%, #000000 90%);
            font-family: 'Trebuchet MS', Arial, sans-serif;
            color: #ffd700;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
          }

          h1 {
            font-size: 3em;
            color: #ff0000;
            text-shadow: 0 0 20px #ff0000, 0 0 40px #ff6600;
            letter-spacing: 2px;
            margin-bottom: 0.3em;
            animation: flicker 2s infinite;
          }

          @keyframes flicker {
            0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
              opacity: 1;
            }
            20%, 24%, 55% {
              opacity: 0.4;
            }
          }

          h2 {
            font-size: 2em;
            color: #00ffcc;
            text-shadow: 0 0 10px #00ffcc;
            margin-bottom: 0.5em;
          }

          p {
            font-size: 1.2em;
            color: #fff;
            background: rgba(255, 215, 0, 0.1);
            border: 2px solid #ffd700;
            border-radius: 10px;
            padding: 15px 25px;
            box-shadow: 0 0 20px rgba(255, 215, 0, 0.4);
            width: fit-content;
            backdrop-filter: blur(3px);
          }

          .chips {
            display: flex;
            gap: 10px;
            margin-top: 25px;
          }

          .chip {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            border: 4px solid #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            background: radial-gradient(circle, #ff0000, #800000);
            color: white;
            box-shadow: 0 0 15px rgba(255, 0, 0, 0.5);
            transition: transform 0.2s;
          }

          .chip:hover {
            transform: scale(1.2);
            box-shadow: 0 0 25px rgba(255, 215, 0, 0.8);
          }

          footer {
            position: absolute;
            bottom: 10px;
            font-size: 0.9em;
            color: #888;
            text-shadow: 0 0 5px #000;
          }
        </style>
      </head>
      <body>
        <h1>🎰 WELCOME 🎰</h1>
        <h2>Wai Fan's Lucky Lounge</h2>
        <p>Hi, my name is Wai Fan. I like to gamble with my maintenance loan.</p>
        <div class="chips">
          <div class="chip">10</div>
          <div class="chip">50</div>
          <div class="chip">100</div>
          <div class="chip">500</div>
        </div>
        <button
          id="goBtn"
          style="
            margin-top: 30px;
            padding: 15px 40px;
            font-size: 1.3em;
            font-weight: bold;
            color: #fff;
            background: linear-gradient(90deg, #ff0000 60%, #ffd700 100%);
            border: none;
            border-radius: 12px;
            box-shadow: 0 0 15px #ff0000;
            cursor: pointer;
            transition: background 0.2s, transform 0.2s;
          "
        >
          GO TO BLACKJACK
        </button>
        <footer>© 2025 Wai Fan's Casino</footer>
        <script>
          document.getElementById('goBtn').onclick = function() {
            window.location.href = 'blackjack.js';
          };
        </script>
      </body>
    </html>
  `);
});

server.listen(8000, '0.0.0.0', () => {
  console.log('Server running at http://0.0.0.0:8000');
});
