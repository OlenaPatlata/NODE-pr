const express =require("express");
// app наш веб сервер
const app=express();
app.get('/', (req, res)=>{
    // console.log(req.url);
    // console.log(req.method);
    res.send("<h2>Home page</h2>")
})
app.get('/contacts', (req, res)=>{
    res.send("<h2>Contacts page</h2>")
})
// app.listen(3000, console.log("Server running"));