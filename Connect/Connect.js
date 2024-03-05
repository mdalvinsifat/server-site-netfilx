const  mongoose = require("mongoose")

const ConnectDB = async() =>{
    try {
        const res = await mongoose.connect(process.env.CONNECT_DB)
        console.log("Connect DB ")
    } catch (error) {
        console.log(error)
    }
}

module.exports = ConnectDB