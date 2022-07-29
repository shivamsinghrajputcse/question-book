// APP route
const router = require("express").Router();
const controller = require("../controllers/controller")

let institutes;

async function updateInstituteData() {
    institutes = await controller.getAllInstitute();
}



router.route('/')
    .get(async (req, res) => {
        await updateInstituteData();

        const institutesData = institutes.data;

        // res.send(institutesData);

        // console.log(instituteData);

        res.render("index", {
            colleges: institutesData,
        });
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
    .get(async (req, res) => {
        await updateInstituteData();
        res.render("addPaper", {
            colleges: institutes.data,
        });
    });

//route for add session
router.route("/addSession")
    .get(async (req, res) => {
        await updateInstituteData();
        res.render("addSession", {
            colleges: institutes.data,
        });
    })
    .post((req, res) => {
        controller.addNewSession(req.body);
        res.redirect("/addPaper");
    });

//route for add branch
router.route("/addBranch")
    .get(async (req, res) => {
        await updateInstituteData();
        res.render("addBranch", {
            colleges: institutes.data,
        });
    })
    .post((req, res) => {
        controller.addNewBranch(req.body);
        res.redirect("/addPaper");
    });



module.exports = router;