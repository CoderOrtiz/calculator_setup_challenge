const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res){
let num1 = Number(req.body.n1);
let num2 = Number(req.body.n2);
let result = num1 + num2;

    res.send(`${num1} + ${num2} = ${result}`);
});

app.listen(3000, function(){
    console.log("The Server is running on Port 3000");
});

