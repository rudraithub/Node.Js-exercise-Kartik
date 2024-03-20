const fs=require("fs")

fs.writeFile("read.txt","my name is kartik",(err)=>{
    console.log("completed")
})

fs.appendFile("read.txt"," age:21",(err)=>{
    console.log("updated")
})

fs.readFile("read.txt",(err,data)=>{
    console.log(data)
})

fs.readFile("read.txt","utf-8",(err,data)=>{
console.log(data)
})
fs.rename("read.txt","myread.txt",(err)=>{
    console.log("hi!")
})

fs.unlink("myread.txt",(err)=>{
    console.log("deleted")
    })
fs.rmdir("./asynchronous",(err)=>{
    console.log("oky")
});