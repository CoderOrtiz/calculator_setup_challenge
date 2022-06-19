const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("Server is Working");
});

app.listen(3000, function(){
    console.log("The Server has Started on Port 3000");
});

