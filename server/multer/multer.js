const multer = require('multer');
const path =require('path')
const fs = require("fs");

const uploadfile = multer({
    storage: multer.diskStorage({
      destination: (req, file, cb) => {
        const limits = {fileSize: 5};
        cb(null,"./uploads");
      },
     
      filename: (req, file, cb) => {
      //   console.log(file);
        const ext = path.extname(file.originalname);
        if (ext == ".jpg" || ext == ".png" || ext == ".jpeg") {
          cb(null, Date.now() + "--" + file.originalname);
        } else {
          console.log("unsupported format");
          cb(new Error("Only images are allowed"));
        }
      },
    }),
  });
  
  module.exports=uploadfile;