const multer = require("multer");
const User = require("../models/userSchema")

const multerConfig = multer.diskStorage({
    destination: (req,file,callback)=>{
        callback(null,'./uploads');
    },
    filename: (req,file,callback) => {
        const ext = file.mimetype.split('/')[1];
        callback(null, `image-${Date.now()}.${ext}`);     
    },
});

const isImage = (req,file,callback) => {
    if(file.mimetype.startsWith('image')){
        callback(null, true);
    }else {
        callback(new Error('Only Image is Allowed..'))
    }
}

const upload = multer({
    storage: multerConfig,
    // fileFilter: isImage,
})

exports.uploadImage  =  upload.single('photo');

exports.upload = async (req,res) =>{
    // console.log(req.file);
    res.status(200).json({
        success : "Success",
    });
};