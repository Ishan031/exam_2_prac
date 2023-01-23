const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validate = require("mongoose-validator");

mongoose.set('strictQuery', true);
var Schema = mongoose.Schema;

var emailValidator = [
    validate({
      validator: "matches",
      arguments: /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/,
      message:
        "Email must be at least 3 characters, max 40, no special characters or numbers, must have space in between name.",
    }),
    validate({
      validator: "isLength",
      arguments: [3, 40],
      message: "Email should be between {ARGS[0]} and {ARGS[1]} characters",
    }),
  ];
  
  var passwordValidator = [
    validate({
      validator: "matches",
      arguments: /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/,
      message:
        "Password needs to have at least one lower case, one uppercase, one number, one special character, and must be at least 8 characters but no more than 35.",
    }),
    validate({
      validator: "isLength",
      arguments: [8, 35],
      message: "Password should be between {ARGS[0]} and {ARGS[1]} characters",
    }),
  ];

const userSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true  , validate: passwordValidator},
	cpassword: { type: String, required: true , validate: passwordValidator},
    profile_file: { type: String },
    profile_path: { type: String },
    number : {type:Number , required :true},
    image : { type : String },
    tokens : [
        {
            token : {
                type : String,
                required : true
            }
        }
    ]
})

// password hashing
userSchema.pre('save', async function(next){
    // console.log("hello there");
    if(this.isModified('password')){
        this.password = bcrypt.hashSync(this.password,12);
        this.cpassword = bcrypt.hashSync(this.cpassword,12);
    }
    next();
});

// jwt 
// userSchema.methods.generateAuthToken = async function (){
//     try{
//         let token = jwt.sign({_id: this._id }, process.env.SECRET_KEY);
//         this.tokens = this.tokens.concat({ token:token});
//         await this.save();
//         return token;    
//     }catch(err){
//             console.log(err);
//         }
// }

const User = mongoose.model("user", userSchema);

module.exports =  User;
