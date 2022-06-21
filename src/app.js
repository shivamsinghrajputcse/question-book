const express = require("express");
const ejs = require("ejs");
// const _ = require("lodash");

//local require
const apiRouter = require(__dirname + "/api/routes/router");
const userRouter = require(__dirname + "/user/routes/router")
// creating the app
const app = express();

app.set('view engine', 'ejs');

app.use(express.json());

app.use(express.urlencoded({ extended: true })); // insted of body parser

//the API route Handler
app.use("/api/v1/", apiRouter);
// user web app route handler
app.use("/", userRouter);






module.exports = app;

