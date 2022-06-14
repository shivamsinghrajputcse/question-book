import { Schema, Model } from "mongoose";
const Institute = require("./InstituteModel");
const questionPaper = require("./QuestionPaperModel");

const examSchema = new Schema({
    instituteId: Institute.Types.ObjectId,
    session: String,
    branch: String,
    papers: [questionPaper.questionPaperSchema]
});

const exam = Model("ExamPaper", examPapersSchema);

module.exports = {
    examSchema,
    exam
};