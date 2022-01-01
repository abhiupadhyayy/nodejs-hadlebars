// genrating port number here
function genratePortNo(...a) {
    return a;
}

// http module
const http = require("http");

// port number
let PORT = process.env.PORT || genratePortNo()


// server 
module.exports = http.createServer((req, res) => {
    if (req.url == '/') {
        res.writeHead(200, { "content-type": "text/plain" })
        res.write("Its home");
        res.end()

    }
    else if (req.url == '/about') {
        res.write("Its about");
        res.end()
    }
    else {
        res.writeHead(400, { 'Content-Type': 'text/html' });
        res.write("Not found");
        res.end();
    }

}).listen(PORT, () => {
    console.log(`Server is running on port number ${PORT}`)
});

module.exports = genratePortNo





