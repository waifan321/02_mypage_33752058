//Mypage web app 

const http = require('http');



const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>My Page</title>
      </head>
      <body>
        <h1>My Page</h1>
        <h2>About Me</h2>
        <p>Hello! My name is Wai Fan. I like to gamble with my maintenance loan.</p>
      </body>
    </html>
  `);
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
