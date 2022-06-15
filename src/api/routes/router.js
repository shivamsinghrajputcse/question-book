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
        controller.getAllInstitute().then(data => {
            res.json(data);
        });
    })
    .post((req, res) => {
        controller.addNewInstitute(req.body), then(res => {
            res.Status
        })


    });

router.route("/institute/:id")
    .get((req, res) => {
        controller.getOneInstitute(req.params.id).then(data => {
            res.json(data);
        });
    });

router.route("/ad")
    .post((req, res) => {
        console.log(req.query);
    })


module.exports = router;