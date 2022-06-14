// const express = 
const router = require("express").Router();
const controller = require("../controllers/controller")

router.route('/')
    .get(controller.getInstituteNames)
    .post((req, res) => {
        res.send("data Recived");
    });




module.exports = router;