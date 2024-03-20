const http = require("http");
const fs = require("fs");
const url = require("url");

const myserver = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();

  const log = `${Date.now()}:${req.methods} ${req.url} - new request received\n`;
  const myurl = url.parse(req.url, true);
  console.log(myurl);

  fs.appendFile("log.txt", log, "utf-8", (err) => {
    if (err) {
      console.error(err);
    }

    switch (myurl.pathname) {
      case "/":
        res.end("Homepage");
        break;
      case "/about":
        const username = myurl.query.myname;
        res.end(`Hi, ${username}`);
        break;
      default:
        res.end("Page not found - 404");
    }
  });
});

myserver.listen(8000, () => {
  console.log("Server running on port 8000");
});
