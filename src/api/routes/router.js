// API call routers "api/v1/"
const router = require("express").Router();
const controller = require("../controllers/controller")
const upload = require("../middleware/uplaod");


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
            res.json(data);
        });
    })
    .post((req, res) => {
        controller.addNewInstitute(req.body), then(res => {
            res.send("OKK");
        })
    });

router.route("/institute/:id")
    .get((req, res) => {
        controller.getOneInstitute(req.params.id).then(data => {
            res.json(data);
        });
    });


router.route("/paper").post(upload.single("pdf"), (req, res) => {
    res.send("Success");
    console.log(req.file, req.body);
});
router.route("/ad")
    .post((req, res) => {
        console.log(req.query);
    })


module.exports = router;