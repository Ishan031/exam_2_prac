const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const Book = require("../models/Book")
const jwt = require("jsonwebtoken");
require("dotenv").config();
const multer = require("multer")();
const file = require("../multer/multer");
const cookie = require("cookie-parser");
// const authenticate = require('../middleware/authenticate');
require("../database/db")
const {upload , uploadImage} = require('../controllers/userController');
// const checkauth = require('../middleware/check-auth');
var secret = "IshanYKHALIWALA"

router.get('/',(req,res)=>{ 
    res.send(`Hello from server`)
})

// const storage = multer.diskStorage({
//     destination  : (req,file,cb) =>{
//         cb(null, 'uploads');
//     },
//     filename : function (req, file , cb){
//         cb(null,file.originalname)
//     }
// });

// const upload = multer({storage: storage})

router.post('/register', uploadImage,async(req,res)=>{
    
    const { name , email ,password , cpassword , number} = req.body;
    const image = 'http://localhost:2000/'+req.file.filename;
    console.log(image);
    if (!name || !email ||!password ||!cpassword ||!number || name == "" || email == "" || password == "" || cpassword == ""){
        return res.status(404).json({error:" Please enter all the details "});
    }
    try{
        await User.findOne({ email:email}).exec(function (err,data){
            // console.log(err);
            // console.log(data);
            if(data){
                 res.status(404).json({message: "Email already exists"});
            } else if(password!=cpassword){
                 res.status(404).json({ message:"Passwords donot match" });
            }else{
                const user = new User({ name,email,number,password,cpassword,image});
                res.status(200).json({message:"user registered successfully"});
                 user.save();
            }
        });
    }catch(err){
        console.log(err);
    }
})

router.post("/signin",  async(req,res)=>{
    try{
        console.log(req.body);
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({error:"User doesnot exist"})
        }
        const userLogin = await User.findOne({email:email});
        // console.log(userLogin);

        if(userLogin){
         const isMatch = await bcrypt.compare(password, userLogin.password);

        if(!isMatch){
            return res.status(400).json({error : "invalid credentials"})
        }else{
        //  token = await userLogin.generateAuthToken();
        //  userLogin['token'] = token;
        //  console.log(userLogin);
        var token = jwt.sign(
            { email: User.email, id: User._id },
            secret,
            { expiresIn: "10sec" }
          );
          res.json({
            success: true,
            message: "Login Successfull",
            token: token,
            data : userLogin,
          });
        //  res.send(userLogin)
        //  res.send(token)

        }
    }else{
        res.status(400).json({message:"Invalid Credentials"})
        return;
    }
    }catch(err){        
        console.log(err);
    }
});

router.get("/get/:id", async(req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(404).json({message: "Cannot get Users"});
    }
})

router.get("/get", async (req,res)=>{
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({message: "Cannot get User data"});
    }   
})

                // image upload Formdata
// router.patch("/update/:id", file.single('testimage'), async(req,res)=>{
//     try {
//         let img =req.file.filename
//         req.body.image = img
//         let path = req.file.path
//         req.body.profile_path = "http://localhost:2000/" + img
//         const updateduser = await User.updateOne({_id:req.params.id}, {$set: req.body});
//         res.status(200).json(updateduser);
//     } catch (error) {
//         res.status(400).json({message: "User update unsuccessfull"});}
// });

router.patch("/update/:id", multer.any(), async(req,res)=>{
    try {  
        const updateduser = await User.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updateduser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

router.delete("/delete/:id", async(req,res)=>{
    try {
        const deleteduser = await User.deleteOne({_id:req.params.id});
        res.status(200).json(deleteduser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})

router.post('/add-book' , (req, res, next) => {
    Book.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data)
        }
    });
});

router.get('/book',(req, res) => {
    Book.find((error, data) => {
        if (error) {
            return next (error);
        } else {
            res.json(data)
        }
    });
});

router.get('/read-book/:id',(req, res) => {
    Book.findById(req.params.id, (error, data) => {
        if (error) {
            res.json(error)
        } else {
            res.json(data)
        }
    });
});

router.put('/update-book/:id',(req, res, next) => {
    Book.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data)
            console.log('Book updated successfully !!');
        }
    })
})

router.delete('/delete-book/:id',(req, res, next) => {
    Book.findByIdAndRemove(req.params.id,  (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

router.post('/upload', uploadImage , upload);




module.exports = router;