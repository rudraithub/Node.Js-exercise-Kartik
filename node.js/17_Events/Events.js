// const EventEmitter = require("events");
// const event = new EventEmitter();

// event.on("sayMyName", () => {
//   console.log("hello");
// });
// event.on("sayMyName", () => {
//   console.log("kartik");
// });
// event.on("sayMyName", () => {
//   console.log("dabhi");
// });

// event.emit("sayMyName");
const EventEmitter = require("events");
const event = new EventEmitter();

// event.on("checkpage", (sc, msg) => {
//   console.log(`staus code is ${sc} and the page is ${msg}`);
// });
// event.emit("checkpage", 200, "ok");
let m = 0;

event.on(event, () => {
  console.log(++m);
});
event.emit(event);
