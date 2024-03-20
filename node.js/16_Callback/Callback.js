// const fs = require("fs");
// let data = fs.readFileSync("input.txt");
// console.log(data.toString("utf-8"));
// console.log("program ende");

const fs = require("fs");
fs.readFile("input.txt", function (err, data) {
  if (err) return console.error("ERROR");
  console.log(data.toString("utf-8"));

  console.log("ended");
});
