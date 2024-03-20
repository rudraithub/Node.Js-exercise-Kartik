const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/kar", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true
}).then(() => {
  console.log("Connection successful");
}).catch((error) => {
  console.error("Connection failed:", error.message);
});
