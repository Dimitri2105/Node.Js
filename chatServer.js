const express = require('express');
const fs = require("fs");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

// Declare global variable to store username
let username;

app.get('/login',(req,res,next) =>{
    res.send('<br><form action="/user" method="POST"><input type ="text" name = "username" placeholder="enter username"><br><br><button type= "submit">Login</button></form>')    
})

app.post('/user',(req,res,next) =>{
    // Setting global variable to the entered username
    username = req.body.username;
    const userData = { userName : username }
    fs.writeFileSync('user.txt',JSON.stringify(userData),err =>{   
    })
    res.redirect('/') 
})

app.get('/', (req,res,next) =>{
    // Read the contents of the "user.txt" file and send them in the response
    const contents = fs.readFileSync('user.txt', 'utf-8');
    res.send(`<pre>${contents}</pre><br><form action="/message" method="POST"><input type ="text" name = "sentMessage" placeholder="enter message"><br><br><button type= "submit">Send</button></form>`);
})

app.post('/message',(req,res,next) =>{
    const message = req.body.sentMessage;
    // Use the global variable to get the username
    const currentUsername = username;
    fs.appendFileSync('user.txt', `${currentUsername}: ${message}\n`)
    res.redirect('/')  
})

app.listen(3000);
