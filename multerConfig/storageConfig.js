const multer = require("multer");

//* storage
const storage = multer.diskStorage({
    destination:(req,file,callback) => {
        callback(null,'./uploads')
    },
    filename:(req,file,callback) => {
        callback(null,`image-${Date.now()}-${file.originalname}`)
    }
})

//* File filtering
const fileFilter = (req,file,callback) => {
    if (file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg') {
        callback(null,true)
    }
    else{
        callback(null,false)
        return callback(new Error ('Only accept png, jpg or jpeg type files'))
    }
}

//* Define Upload
const upload = multer({storage,fileFilter})

//* Export

module.exports = upload

