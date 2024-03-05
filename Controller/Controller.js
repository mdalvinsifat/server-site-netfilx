const User = require("../Model/Model")
const bcrypt = require ("bcrypt")
const JWT = require("jsonwebtoken")

const Register = async(req, res) =>{
    try {
        const {fullName , email , password} = req.body 
        const extingUser = await User.findOne({email})
        if(extingUser){
          return   res.status(200).send({
                success:false ,
                message:"user Is defaind"
            })
        }

        const hashpassword = await bcrypt.hash(password, 10)
        const result = await User.create({
          email : email , 
          password: hashpassword, 
          fullName: fullName
        })

        const token = JWT.sign({
            email : result.email ,
            id: result._id          
        }, process.env.JWT)

        return res.status(200).send({
            success:true, 
            message:"user Register Successfully".
            token
        })
    } catch (error) {
        res.status(200).json({
            success:false,
            message:"user Login Not successfully "
        })
    }
}



const Login = async(req, res) =>{
    try {
        const {email, password} = req.body 
        const extingUser = await User.findOne({email })
        if(!extingUser){
            return res.status(400).send({
                success:false, 
                message:"user email not current"
            })
        }

        const matchpassword = await bcrypt.compare(password, extingUser.password)
        if(!matchpassword){
            return res.status(400).send({
                success:false, 
                message:"user email not current"
            })
        }

        const token = JWT.sign({
            email:extingUser.email,
            id:extingUser._id
        }, process.env.JWT)

        return    res.status(200).send({
            success:true,
            message:"user Login Successfully",
            token,
            
        })
        
    } catch (error) {
       return res.status(200).send({
            success:false,
            message:"unsuccessfully Login"
        })
    }
}



const LogOut = async(req, res) =>{
    try {
        const product = await User.find()
        res.status(200).send({
            success:"true",
            message:"user Login successfully ",
            product
        })
    } catch (error) {
        
    }
}

module.exports = {Register, Login , LogOut}