// API call routers "api/v1/"
const router = require("express").Router();
const controller = require("../controllers/controller");
const upload = require("../middleware/multerUpload");
const s3Upload = require("../middleware/s3Service");


const Paper = require("../models/ExamModel");

router.route('/')
    .get((req, res) => {
        res.send("API Home");
    })
    .post((req, res) => {
        res.send("Dosen't Expect any Data.");
    });


router.route("/institute")
    .get((req, res) => {
        controller.getAllInstitute().then(data => {
            res.send(data);
        });
    })
    .post((req, res) => {
        controller.addNewInstitute(req.body).then(data => {
            if (data) {
                res.send(data);
            } else {
                res.send("success");
            }

        })
    });

router.route("/institute/:id")
    .get((req, res) => {
        controller.getOneInstitute(req.params.id).then(data => {
            res.json(data);
        });
    });

// add session post route
router.route("/session")
    .post((req, res) => {
        controller.addNewSession(req.body).then(data => {
            if (data) {
                res.send(data);
            } else {
                res.send("success");
            }
        });
    });

router.route("/paper")
    .post(upload.single("pdf"), async (req, res) => {
        const result = await s3Upload(req.file, req.body);
        controller.addNewExam(result.Location, req.body).then(data => {
            if (data) {
                res.send(data);
            } else {
                res.send("Success");
            }
        })
    })
    .patch(upload.single("pdf"), async (req, res) => {
        const result = await s3Upload(req.file, req.body);
        controller.addNewPaperToExam(result.Location, req.body).then(data => {
            if (data) {
                res.send(data);
            } else {
                res.send("Success");
            }
        })
    });

//get request for route "/api/v1/paper/:id"
router.route("/paper/:id")
    .get((req, res) => {
        controller.getOnePaper(req.params.id).then(data => {
            //check for errors
            if (data) {
                res.json(data);
            }
        });
    });

router.route("/ad")
    .post((req, res) => {
        console.log(req.query);
    })


module.exports = router;