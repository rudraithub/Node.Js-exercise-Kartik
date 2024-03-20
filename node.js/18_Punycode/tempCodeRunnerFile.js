const tty = require("tty");

const readableStream = new tty.ReadStream(fd);
const writableStream = new tty.WriteStream(fd);