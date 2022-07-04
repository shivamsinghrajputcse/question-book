const Institute = require("../models/InstituteModel");
const Paper = require("../models/ExamModel");
// const upload = require("../middleware/multerUpload");


// const getInstituteNames = (req, res) => {
//     res.render("about");
// }

const addNewInstitute = async (data) => {
    const newInstitute = new Institute({
        instituteName: data.institute_name,
        altName: [data.alt_name],
        website: data.website,
        sessions: [],
        examTypes: [],
        branches: []
    });

    return await newInstitute.save();
}

const addNewSession = async (formData) => {
    return await Institute.findOneAndUpdate({
        instituteName: formData.instituteName,
    },
        {
            $push: {
                sessions: formData.session,
            }
        },
    );
}

const addNewBranch = async (fromData) => {
    return await Institute.findOneAndUpdate({
        instituteName: fromData.instituteName,
    },
        {
            $push: {
                branches: fromData.branch,
            }
        },
    );
}


// get all the papers of an exam
const getExamPapers = async (fromData) => {
    return await Paper.find({
        instituteId: fromData.instituteId,
        session: fromData.session,
        branch: fromData.branch,
    }).exec();
    // return await Paper.findById(fromData.instituteId).exec();
}

// get details of all institute
const getAllInstitute = async () => {
    return await Institute.find({}, "instituteName sessions branches examTypes").exec();
}

// get details of an institute
const getOneInstitute = async (id) => {
    return await Institute.findById(id, "instituteName sessions branches examTypes").exec();
}

//add new exam
const addNewExam = async (filePath, fromData) => {
    const newPaper = new Paper({
        instituteId: fromData.instituteId,
        session: fromData.session,
        branch: fromData.branch,
        papers: [
            {
                title: fromData.title,
                examType: fromData.examType,
                pdf: filePath,
            }
        ]
    });
    return await newPaper.save();
}

const getOnePaper = async (id) => {
    return await Paper.findById(id, "instituteId session branch papers").exec();
}


const addNewPaperToExam = async (filePath, fromData) => {
    return await Paper.findOneAndUpdate({
        instituteId: fromData.instituteId,
        session: fromData.session,
        branch: fromData.branch,
    },
        {
            $push: {
                papers: [{
                    title: fromData.title,
                    examType: fromData.examType,
                    pdf: filePath,
                }]
            }
        },
    );
}




module.exports = {
    getOneInstitute,
    getAllInstitute,
    addNewInstitute,
    addNewExam,
    addNewPaperToExam,
    getExamPapers,
    getOnePaper,
    addNewSession,
    addNewBranch,
}