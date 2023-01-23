const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/month_2",{
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err)=>{
    if(err)
    {
        console.log("error");
    }
    else{
        console.log("successful");
    }
})  