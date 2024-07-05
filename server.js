const http = require("http");
const express = require("express");
const app=express();
const bodyParser = require('body-parser');
const userRouter=require("./routes/user")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



  app.use('/',userRouter);
app.listen(8000,()=>{
    console.log("server start");
})