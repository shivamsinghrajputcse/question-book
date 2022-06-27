//local
require('dotenv').config();
const connectDB = require(__dirname + "/api/db/connectDB");
const app = require(__dirname + "/app");

const PORT = process.env.PORT || 8080;
const URI = process.env.MONGODB_URI;


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
