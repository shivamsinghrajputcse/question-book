const express = require("express");
// const bodyParser = require("body-parser");
require("ejs");
const mongoose = require("mongoose");
// const _ = require("lodash");

//local require

const apiRouter = require(__dirname + "/api/routes/router");

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true })); // insted of body parser

app.use("/api/v1/", apiRouter);





app.get("/", async (req, res) => {
    // const data = await Institute.find({}, 'instituteName').exec();
    const data = app.get("/api/v1/");
    res.render(data);
})



module.exports = app;

