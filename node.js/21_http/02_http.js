const http = require("http");
const fs = require("fs");

const myserver = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} - new request received\n`;

    fs.appendFile("log.txt", log, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
        }


        switch (req.url) {
            case "/":
                res.end("Homepage");
                break;
            case "/about":
                res.end("My name is Kartik");
                break;
            default:
                res.end("Page not found - 404");
        }
    });
});
myserver.listen(9001, () => {
    console.log('Server running on port 9001');
})
