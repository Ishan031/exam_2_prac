const express = require("express");
const app = express();
const port = process.env.PORT || 2000;
require("./database/db")
const cors = require("cors");
const User = require("./models/userSchema")
const cookieParser = require('cookie-parser');
const router = require("./routers/auth");
const bodyparser = require('body-parser');
const userUpload = require('./routers/auth')

app.use(bodyparser.json());
app.use(bodyparser.urlencoded())
app.use(cors());
app.use(express.static('./uploads'));
app.use(express.json());
app.use('',router)
app.use(cookieParser())

app.use('/user' , userUpload)

app.get('/', (req,res)=>{
    res.send(`Hello from app`)
})

app.listen(port, console.log(`Listening on port ${port}...`));