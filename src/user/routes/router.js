// APP route
const router = require("express").Router();
const controller = require("../controllers/controller")

router.route('/')
    .get(async (req, res) => {
        const institutes = await controller.getAllInstitute(req.get('origin'));
        const institutesData = institutes.data;
        res.render("index");
    });


//route fro add new Institute
router.route('/addInstitute')
    .get((req, res) => {
        res.render("addInstitute");
    })
    .post((req, res) => {
        //req.origin is uded to get the url of the server
        controller.addNewInstitute(req.body, req.get('origin')).then(data => {
            if (data) {
                console.log(data);
            }
        });
        res.redirect("/addPaper");
    });

router.route("/addPaper")
    .get((req, res) => {
        res.render("addPaper");
    });

//route for add session
router.route("/addSession")
    .get((req, res) => {
        res.render("addSession");
    })
    .post((req, res) => {
        controller.addNewSession(req.body);
        res.redirect("/addPaper");
    });

//route for add branch
router.route("/addBranch")
    .get((req, res) => {
        res.render("addBranch");
    })
    .post((req, res) => {
        controller.addNewBranch(req.body);
        res.redirect("/addPaper");
    });



module.exports = router;