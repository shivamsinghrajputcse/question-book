const mongoose = require("mongoose");

module.exports = questionPaperSchema = new mongoose.Schema({
    title: String,
    examType: String,
    pdf: String
});

