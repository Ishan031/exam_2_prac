const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validate = require("mongoose-validator");

var nameValidator = [
    validate({
        validator: "isLength",
        arguments: [3, 40],
        message: "Name should be between {ARGS[0]} and {ARGS[1]} characters",
      }),
]



let Book = new Schema({

    name:{
        type:String,
        validate : nameValidator,
    },
    author:{
        type:String
    },
    price:{
        type:String
    },
    quantity:{
        type:String
    },
    description : {
        type:String
    },
    image: {
        type:String
    }
    // Bookimage: { type: String, required: true },
},
{
    collection:'book'
}
) 
module.exports = mongoose.model('Book',Book)