const multer = require('multer');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload/')
    },
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype === "application/pdf") {
        cb(null, true);
    } else {
        cb(new Error("File type dosen't match"), false);
    }
}

const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 5000000
    }
});

module.exports = upload;