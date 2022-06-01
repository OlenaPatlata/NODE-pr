const express=require('express')
const fs =require("fs/promises")
const cors =require('cors')
const books=require("./books")
const moment=require('moment')
const app=express()

 app.use(async(req,res,next)=>{
    const {method, url}=req;
    const date = moment().format("DD-MM-YYYY_hh:mm:ss");
    await fs.appendFile("server.log", `\n${method} ${url} ${date}`)
next()
})
app.use(cors());

app.use('/books', (req,res,next)=>{
    
    console.log(req.headers);
    console.log("first");
    next()
})
app.use((req,res,next)=>{
    console.log("second");
    next()
})
app.get('/books', (req,res)=>{
    res.json(books)
})
app.get('/products', (req,res)=>{
    console.log(req.headers);
    res.json([])
})
app.use((req,res)=>{
    res.status(404).json({message: "Not found"})
})
app.listen(3000)