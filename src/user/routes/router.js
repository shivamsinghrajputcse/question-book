// APP route




const router = require("express").Router();
const app = require("../../app");
const controller = require("../controllers/controller")

router.route('/')
    .get((req, res) => {
        res.render("index");
    })

router.route('/addInstitute')
    .get((req, res) => {
        res.render("addInstitute");
    })
    .post((req, res) => {
        controller.addNewInstitute(req.body);
        res.redirect("/");
    });



module.exports = router;