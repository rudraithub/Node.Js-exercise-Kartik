//## 2701 - write a program for create a server using express

const express = require('express');
const router = require('./router');
const app = express();
const port = 3000;

app.use('/', router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

