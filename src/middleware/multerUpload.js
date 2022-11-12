const multer = require('multer');


// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'upload/');
//     },
//     // filename: (req,file,cb) => {

//     // }
// });
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "application/pdf") {
        cb(null, true);
    } else {
        cb(new Error("File type dosen't match"), false);
    }
};

const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 5000000
    }
});

module.exports = upload;