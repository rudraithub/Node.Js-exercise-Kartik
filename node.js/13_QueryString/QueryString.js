querystring = require("querystring");
const obj = querystring.parse("name=kartik&company=rudra it hub");
const onj1 = querystring.stringify({ name: "kartik", company: "rudra it hub" });
console.log(obj);
console.log(onj1);
