/* Server Setup */
const http = require("http");
const port = process.env.PORT || 3000;

/* Create Server */
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Hello World!</h1>");
});

/* Start Server */
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
