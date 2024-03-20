const path = require("path");

console.log(path.dirname("E:/kartik/node.js/path/path.js"));
console.log(path.extname("E:/kartik/node.js/path/path.js"));
console.log(path.basename("E:/kartik/node.js/path/path.js"));

const mypath = path.parse("E:/kartik/node.js/path/path.js");
console.log(mypath.name);
console.log(mypath.root);
console.log(mypath.ext);
console.log(mypath.dir);

console.log(
  path.format({
    dir: "E:/kartik/node.js/path",
    base: "path.js",
    ext: ".js",
    name: "path",
  })
);

console.log(
  path.relative(
    "E:/kartik/node.js/path/path.js",
    "E:/kartik/node.js/path/path.js"
  )
);
console.log(path.join("E:/", "kartik/", "node.js/", "path/", "path.js"));

console.log(path.isAbsolute("E:/"));
console.log(path.isAbsolute("kartik/"));
console.log(path.isAbsolute("node.js/"));
console.log(path.isAbsolute("path/"));
console.log(path.isAbsolute("path.js"));
