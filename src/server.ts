import app from "./app/app"

const PORT = process.env.PORT || 3000

const server = () => {
    try{
        app.listen(PORT, () => {
            console.log("Server is running on PORT " + PORT)
        })
    } catch (error) {
        console.log(error)
    }
}

server()

export default server