const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")

const router = require("./route/Route")
const ConnectDB = require("./Connect/Connect")


const app = express()
app.use(express.json())
dotenv.config()
// app.use(cors(
//     {
//         origin: ["https://server-site-6uoawwixr-alvin-sifats-projects.vercel.app"],
//         methods: ["POST", "GET"],
//         credentials: true
//     }
// ));

app.use(cors())
app.get("/", (req, res) => {
    res.json("gello");
})

app.use("/api/v1",router)
ConnectDB()
const port = process.env.PORT
app.listen(port , () => console.log(`http://localhost:${port}`))