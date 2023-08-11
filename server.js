const http = require("http");
const express = require('express');

const app = express();

app.use((req,res,next) => {
  console.log("mooooo.....")
  next();
})
app.use((req,res,next) => {
  console.log("second moooo.....")
})

app.listen(3000);
