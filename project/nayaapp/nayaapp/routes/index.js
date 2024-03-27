const express = require("express");
const router = express.Router();
const userModel = require("./users");
const postModel = require("./post");
const passport = require("passport");
const upload=require("./multer")


const localStrategy=require("passport-local");
passport.use(new localStrategy(userModel.authenticate()));


router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/login", function (req, res, next) {
  res.render("login",{error:req.flash('error')});
});

router.post('/upload', upload.single("file"), isLoggedIn, async function (req, res) {
 
  if (!req.file) {
    return res.status(400).send("No file was uploaded.");
  }
  try {

    const user = await userModel.findOne({ username: req.session.passport.user });
    if (!user) {
      return res.status(404).send("User not found.");
    }
    const post = await postModel.create({
      image: req.file.filename,
      imageText: req.body.filecaption,
      user: user._id
    });

    user.posts.push(post._id);

    await user.save();

    res.redirect('/profile');
  } catch (err) {
    console.error(err);
    res.status(500).send("Error uploading file.");
  }
});


router.get('/profile', isLoggedIn, async function (req, res, next) {
  const user = await userModel.findOne({
    username: req.session.passport.user
  })
    .populate("posts")
  console.log(user);
  res.render("profile", { user });
});
// router.get("/alluesrepost",async function (req, res, next) {
//   let user= await userModel
//   .findOne({_id:"65e966a8737de2ec13d05a2a"})
//   .populate("post")
// res.send(user);
// });

// router.get("/creatuser", async function (req, res, next) {
//   const createduser = await userModel.create({
//     username: "kartik",
//     password: "kartik",
//     post: [],
//     email: "dabhikartik@gmali.com",
//     fullName: "dabhi kartik b.",
//   });
//   res.send(createduser);
// });

// router.get("/creatpost", async function (req, res, next) {
//   try {
//     const createdPost = await postModel.create({
//       postText: "everyone",
//       user: "65e966a8737de2ec13d05a2a",
//     });
//     let user = await userModel.findOne({ _id: "65e966a8737de2ec13d05a2a" });
//     user.post.push(createdPost._id);
//     await user.save();
//     res.send("done");

//   } catch (error) {
//     res.send(error.message);
//   }
// });

router.post("/register",function(req,res,next){
 const {username,email,fullname}=req.body;
  const userData=new userModel({username,email,fullname})

userModel.register(userData,req.body.password)
.then(function(){
  passport.authenticate("local")(req,res,function(){
    res.redirect("/profile")
  })
})
});

router.post("/login",passport.authenticate("local",{
  successRedirect:"/profile",
  failureRedirect:"/login",
  failureFlash:true
}),function(req,res){
});

router.get('/logout', function(req, res, next){
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/login');
  });
});

function isLoggedIn(req,res,next){
  if(req.isAuthenticated()) return next();
  res.redirect("/")
}

module.exports = router;
