// APP route




const router = require("express").Router();
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
        res.redirect("/addPaper");
    });
router.route("/addPaper")
    .get((req, res) => {
        res.render("addPaper");
    });
//get route for addsession
router.route("/addSession")
    .get((req, res) => {
        res.render("addSession");
    });
//get route for addbranch
router.route("/addBranch")
    .get((req, res) => {
        res.render("addBranch");
    });



module.exports = router;