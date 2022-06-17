const mongoose = require("mongoose");
const questionPaper = require("./QuestionPaperModel");

const examSchema = new mongoose.Schema({
    instituteId: mongoose.ObjectId,
    session: String,
    branch: String,
    papers: [questionPaper]
});

module.exports = mongoose.model("ExamPaper", examSchema);

