const mongoose = require("mongoose");
const validator = require("validator");
mongoose
  .connect("mongodb://localhost:27017/dk")
  .then(() => console.log("connection successful..."))
  .catch((err) => console.log(err));

const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    minlength: 2,
    maxlength: 30,
  },
  ctype: {
    type: String,
    required: true,
    lowercase: true,
    enum: ["frontend", "backend", "database"],
  },
  videos: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error("this code present error");
      }
    },
  },
  author: String,
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    }
  },
  active: Boolean,
});

const Playlist = mongoose.model("Playlist", playlistSchema);

const createDocument = async () => {
  try {
    // const nodePlaylist = new Playlist({
    //   name: "react js",
    //   ctype: "back end",
    //   videos: 80,
    //   author: "kartik",
    //   active: true,
    // });
    // const reactPlaylist = new Playlist({
    //   name: "react js",
    //   ctype: "frontend",
    //   videos: 80,
    //   author: "kartik",
    //   active: true,
    // });
    // const jsPlaylist = new Playlist({
    //   name: "js",
    //   ctype: "frontend",
    //   videos: 80,
    //   author: "kartik",
    //   active: true,
    // });
    // const mongodbPlaylist = new Playlist({
    //   name: "mongodb",
    //   ctype: "database",
    //   videos: 80,
    //   author: "kartik",
    //   active: true,
    // });
    const mongoosPlaylist = new Playlist({
      name: "kd",
      ctype: "database",
      videos: 80,
      author: "kartik",
      active: true,
      email: "dabhikartik@gmail.c",
    });

    const result = await Playlist.insertMany([mongoosPlaylist]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
createDocument();

// const getDocument = async () => {
//   try {
//     const result = await Playlist
//       .find({ author: "kartik" })
//       .select({ name: 1 })
//       // .countDocuments()
//       .sort({name: -1 });

//     // .limit(1);

//     // console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// getDocument();

//update the document

// const updateDocument =async (_id)=>{
//   try {
// //     const result =await Playlist.findByIdAndUpdate({_id},{
//       $set:{
//         name:"Javascript"
//       }
//     },{
//       new : true
//     });
//     console.log(result)

//   } catch (error) {
//     console.log(error)
//   }
// }
// updateDocument("65d32d79a827cee866e29d5e")

//delete the document

// const deleteDocument =async (_id)=>{
//   try {
//     const result =await Playlist.findByIdAndDelete({_id},{

//     });
//     console.log(result)

//   } catch (error) {
//     console.log(error)
//   }
// }
// deleteDocument("65d32d79a827cee866e29d5c")
