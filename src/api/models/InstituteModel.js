const mongoose = require("mongoose")

const instituteSchema = new mongoose.Schema({
    instituteName: String,
    altName: [String],
    website: String,

    semesters: [String],
    examTyps: [String],
    branches: [String],

    questionPapers: [
        examPaperSchema
    ]
})

// const paperSchema = new mongoose.Schema({
//     title: String,
//     pdfLink: String
// })

// const examPaperSchema = new mongoose.Schema({

//     branch: String,
//     session: String,
//     semType: String,
//     papers: [paperSchema]

// })

module.exports = mongoose.Model("Institute", instituteSchema);