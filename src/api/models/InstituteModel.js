const mongoose = require("mongoose");
// const examPaper = require("./ExamModel");

const instituteSchema = new mongoose.Schema({
    instituteName: String,
    altName: [String],
    website: String,

    sessions: [String],
    examTypes: [String],
    branches: [String],
});

module.exports = mongoose.model("Institute", instituteSchema);