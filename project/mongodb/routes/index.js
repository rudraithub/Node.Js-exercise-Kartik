var express = require('express');
var router = express.Router();
const usermodel = require("./users");

router.get('/', function (req, res) {
  res.render("index");
});

router.get('/create', async function (req, res) {
  const createuser = await usermodel.create({
    username: "kartik_112",
    name: "kartik",
    age: 21
  });
  res.send(createuser);
});

module.exports = router;
