//Mypage web app 

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
      <title>MyPage</title>
    </head>
    <body>
      <h1>Hello World!</h1>
      <h2>Welcome to My Page</h2>
      <p>Hi, my name is Wai Fan. I like to gamble with my maintenance loan.</p>
    </body>
    </html>
  `);
});

server.listen(port, () => {
  console.log('Server running at http://localhost:8000');
});
