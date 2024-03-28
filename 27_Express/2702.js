//## 2702 - write a program for create router using express


const express = require('express');


const router = express.Router();


router.get('/home', (req, res) => {
  res.send('Hello from Express server!');
});

router.get('/about', (req, res) => {
  res.send('About page');
});

router.get('/contact', (req, res) => {
  res.send('Contact page');
});


module.exports = router;
