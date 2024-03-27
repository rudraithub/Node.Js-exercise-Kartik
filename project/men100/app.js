const express=require("express");
require("./db/conn")
const MensRanking=require("./routes/men's")
const app=express();


const port=process.env.PORT || 3000; 
app.use(express.json())

// post req
app.post("/mens",async(req,res)=>{
    try {
        const addingMensRecords=new MensRanking(req.body)
        console.log(req.body)
        addingMensRecords.save();
   const inserMens= await  addingMensRecords.save();
   res.status(201).send(inserMens);
    } catch (error) {
        res.status(400).send(error)
    }
});

// get request

app.get("/mens",async(req,res)=>{
    try {
       const getMens=await MensRanking.find({});
       res.send(getMens)
    } catch (error) {
        res.status(400).send(error)
    }
});

app.listen(port,()=>{
    console.log(`connection is live at port ${port}`);
})