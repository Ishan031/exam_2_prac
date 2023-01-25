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
const userprofile = require("../models/userprofile")
// const authenticate = require('../middleware/authenticate');
require("../database/db")
const {upload , uploadImage} = require('../controllers/userController');
// const checkauth = require('../middleware/check-auth');
var secret = "IshanYKHALIWALA"

router.get('/',(req,res)=>{ 
    res.send(`Hello from server`)
})

router.post('/register', uploadImage,async(req,res)=>{
    
    const { name , email ,password , cpassword , number} = req.body;
    // const image = 'http://localhost:2000/'+req.file.filename;
    // console.log(image);
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
                const user = new User({ name,email,number,password,cpassword});
                res.status(200).json({message:"user registered successfully"});
                 user.save();
            }
        });
    }catch(err){
        console.log(err);
    }
})

router.post('/add-user', multer.any(),(req, res, next) => {
    const { firstname , lastname ,gender , age , address} = req.body;
    if (!firstname || !lastname ||!gender ||!age ||!address || firstname == "" || lastname == "" || gender == "" || age == "" || address == ""){
        return res.status(404).json({error:" Please enter all the details "});
    }
    userprofile.create(req.body, (error, data) => {
        if (error) {
            return next(error);

        } else {
            const user = new userprofile({

                firstname: req.body.firstname,
                lastname: req.body.lastname,
                gender: req.body.gender,
                age: req.body.age,
                address: req.body.address,
            })
            // user.save();
            return res.json({ success: true, message: 'Added ' })
        }
    });
});

router.get('/getusers', (req, res) => {
    userprofile.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data)
        }
    });
});

router.get('/read-user/:id', (req, res, next) => {
    userprofile.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    });
});

router.put('/update-user/:id', (req, res, next) => {
    const { firstname , lastname ,gender , age , address} = req.body;
    if (!firstname || !lastname ||!gender ||!age ||!address || firstname == "" || lastname == "" || gender == "" || age == "" || address == ""){
        return res.status(404).json({error:" Please enter all the details "});
    }
    userprofile.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(req.body)
            console.log('user updated successfully !!');
        }
    })
})

router.delete('/delete-user/:id', (req, res, next) => {
    userprofile.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: "user Deleted successfull"
            })
        }
    })
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

router.patch("/update/:id", uploadImage ,async(req,res)=>{
    try {
        const { name , email , number} = req.body;
        if(!name || !email || !number || name == "" || email == ""|| number == ""){
            return res.status(400).json("Please Enter All the details")
        }
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

// router.post('/add-book' , uploadImage, (req, res, next) => {
//     Book.create(req.body, (error, data) => {
//         if (error) {
//             return next(error);
//         } else {
//             res.json(data)
//         }
//     });
// });

router.post('/add-book', uploadImage,async(req,res)=>{
    
    const { name , author ,price , quantity , description} = req.body;
    const image = 'http://localhost:2000/'+req.file.filename;
    console.log(image);
    if (!name || !author ||!price ||!quantity ||!description || name == "" || author == "" || price == "" || description == ""){
        return res.status(404).json({error:" Please enter all the details "});
    }
    try{
                const book = new Book({ name,author,price,description,quantity,image});
                res.status(200).json({message:"Book registered successfully"});
                 book.save();
    }catch(err){
        console.log(err);
    }
})

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

// router.patch('/update-book/:id',(req, res, next) => {
//     try{
//         const { name , author ,price , quantity , description} = req.body;
//         if(!name || !author || !price || !quantity || !description || name =="" || author == ""||price == "",quantity==""||description==""){
//             return res.status(400).json("Please fill all the details")
//         }
//         Book.findByIdAndUpdate(req.params.id, {
//             $set: req.body
//         }, (error, data) => {
//             if (error) {
//                 return next(error);
//             } else {
//                 res.json(data)
//             // console.log('Book updated successfully !!');
//         }
//     })
// }catch(err){
//     return res.status(200).json("Operation Failed")
// }
// })


router.patch("/update-book/:id", uploadImage ,async(req,res)=>{
    try {
        const { name , author , price , quantity , description} = req.body;
        if(!name || !price ||!quantity ||!description || name == "" || price == ""|| description == "" || quantity=="" || author ==""){
            return res.status(400).json("Please Enter All the details")
        }
        const updatedBook = await Book.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

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





module.exports = router;