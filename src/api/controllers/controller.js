const Institute = require("../models/InstituteModel")


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
    })
    try {
        await newInstitute.save();
    } catch (err) {
        if (!err) {
            console.log("Institute Added Successfully");
            return true;
        } else {
            console.log(err);
        }
    }

}

const getAllInstitute = async () => {
    return await Institute.find({}, "instituteName sessions branches examTypes").exec();
}
const getOneInstitute = async (id) => {
    return await Institute.findById(id, "instituteName sessions branches examTypes").exec();
}
module.exports = {
    getOneInstitute,
    getAllInstitute,
    addNewInstitute,

}