// const zlib = require("zlib");
// const gzip = zlib.createzip();
// const fs = require("fs");
// const inp = fs.createReadStream("input.txt");
// const out = fs.createWriteStream("input.txt.gz");
// inp.pipe(gzip).pipe(out);

// const zlib = require("zlib");
// const unzip = zlib.createUnzip();
// const fs = require("fs");
// const inp = fs.createReadStream("input.txt.gz");
// const out = fs.createWriteStream("input2.txt");
// inp.pipe(unzip).pipe(out);

// const zlib = require("zlib");
// const fs = require("fs");

// const inputData = "This is the data that we want to compress using DeflateRaw.";

// const compressedFileStream = fs.createWriteStream("input3.txt");

// const deflate = zlib.createDeflateRaw();

// deflate.pipe(compressedFileStream);

// deflate.write(inputData);

// deflate.end();

// compressedFileStream.on("finish", () => {
//   console.log("Compression complete.");
// });
// Node.js program to demonstrate the
// inflate() method

// const zlib = require("zlib");

// let input = "kartik";

// zlib.deflate(input, (err, buffer) => {
//   zlib.inflate(buffer, (err, buffer) => {
//     console.log(buffer.toString("utf8"));
//   });
// });

// Node.js program to demonstrate the
// inflate() method

// Including zlib module
const zlib = require("zlib");
const fs = require("fs");

// Example data to compress
const dataToCompress =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

// Compression
zlib.deflate(dataToCompress, (err, compressedData) => {
  if (err) {
    console.error("Compression error:", err);
    return;
  }

  console.log("Compressed data:", compressedData);

  // Write compressed data to a file
  fs.writeFile("zip.txt", compressedData, (err) => {
    if (err) {
      console.error("Error writing compressed data:", err);
      return;
    }
    console.log("Compressed data written to file.");
  });
});

// Decompression
fs.readFile("zip.txt", (err, compressedData) => {
  if (err) {
    console.error("Error reading compressed data:", err);
    return;
  }

  zlib.unzip(compressedData, (err, decompressedData) => {
    if (err) {
      console.error("Decompression error:", err);
      return;
    }
    console.log("Decompressed data:", decompressedData.toString());
  });
});
