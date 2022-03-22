const express = require("express");
const app = express();

const portNum = 3000;
app.listen(portNum, ()=> console.log("Listening to port: "+ portNum));
