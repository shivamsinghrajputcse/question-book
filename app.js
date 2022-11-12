require('dotenv').config();
const express = require("express");

const connectDB = require(__dirname + "/src/db/connectDB");
const apiRouter = require(__dirname + "/src/routes/apiRouter.js");

const PORT = process.env.PORT || 8080;
const URI = process.env.MONGODB_URI;


const app = express();

// app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // insted of body parser


//use static files
// app.use(express.static(__dirname + "/public"));
// app.use(express.static("public"));

//the API route Handler
app.use("/api/v1/", apiRouter);
// user web app route handler
// app.use("/", userRouter);

async function start() {
    try {
        await connectDB(URI);
        app.listen(PORT, () => {
            console.log("Server is running in port " + PORT);
        });
    } catch (err) {
        console.log(err);
    }
}

start();

module.exports = app;

