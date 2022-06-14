const mongoose = require("mongoose");

const connectDB = (URI) => {
    mongoose.connect(URI, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("connected to Mongo");
        }
    });
}

module.exports = connectDB;