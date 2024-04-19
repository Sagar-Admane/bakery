import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: true}));
const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3001;

var x, y, z;

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/view/index.html");
})

app.get("/index.html", (req, res)=>{
    res.sendFile(__dirname+"/view/index.html");
})

app.get("/about.html", (req, res)=>{
    res.sendFile(__dirname+"/view/about.html");
})

app.get("/blog.html", (req, res)=>{
    res.sendFile(__dirname+"/view/blog.html");
})

app.get("/contact.html", (req, res)=>{
    res.sendFile(__dirname+"/view/contact.html");
})

app.post("/contact.html", (req, res)=>{
    res.sendFile(__dirname + "/view/contact.html");
    const a = req.body;
    fs.appendFile("message.txt", JSON.stringify(a), function(err){
        if(err) throw err;
        else{
            console.log("Saved..");
        }
    });
})

app.get("/shop.html", (req, res)=>{
    res.sendFile(__dirname+"/view/shop.html");
})

app.get("/cart.html", (req, res)=> {
    res.sendFile(__dirname+"/view/cart.html");
})

app.post("/send-array", (req, res)=>{
    const receivedArray = req.body.array;
    console.log(receivedArray);
    fs.writeFile('abc.txt', JSON.stringify(receivedArray), function(err){
        if(err) throw err;
        else{
            console.log("Saved...");
        }
    })
    res.sendStatus(200);
})

app.post('/send', (req, res)=>{
    const b = req.body.array;
    fs.writeFile('GOT.txt', JSON.stringify(b), function(err){
        if(err) throw err;
        else{
            console.log("YEEEEaaahh...");
        }
    })
    console.log(b);
})

app.get("/order_confirmation.html", (req, res)=>{
    res.sendFile(__dirname+"/view/order_confirmation.html");
})

app.listen(port, ()=>{
    console.log("Server Started");
})