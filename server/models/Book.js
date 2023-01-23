const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Book = new Schema({
   
    name:{
        type:String
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