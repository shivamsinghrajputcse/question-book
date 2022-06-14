// API call routers "api/v1/"
const router = require("express").Router();
const controller = require("../controllers/controller")

router.route('/')
    .get((req, res) => {
        res.send("API Home");
    })
    .post((req, res) => {
        res.send("data Recived");
    });


router.route("/institute")
    .get((req, res) => {
        res.json(req.body);
    })
    .post((req, res) => {
        controller.addNewInstitute(req.body)

    });

router.route("/institute/:id")
    .get((req, res) => {
        const institute = controller.getOneInstitute(req.params.id);
        res.json(institute);
    });


module.exports = router;