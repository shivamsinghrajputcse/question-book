import { Schema, Model, model } from "mongoose";

const questionPaperSchema = new Schema({
    title: String,
    examType: String,
    pdf: String
});

const questionPaper = Model("QuestionPaper", questionPaper);

module.exports = {
    questionPaperSchema,
    questionPaper
};