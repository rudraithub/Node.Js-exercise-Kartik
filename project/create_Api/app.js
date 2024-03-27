const express=require("express");
require('./config/conn')

const router=require('./router/index')
const app=express()

const port = process.env.PORT || 8000;

app.use(express.json())
app.use(router);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

