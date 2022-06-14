//local
require('dotenv').config();
const connectDB = require(__dirname + "/api/db/connectDB");
const app = require(__dirname + "/app");

const PORT = process.env.PORT || 8080;

//env
const URI = "mongodb://localhost:2717/test";


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
