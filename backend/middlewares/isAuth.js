<<<<<<< HEAD
import jwt from "jsonwebtoken"
const isAuth=async (req,res,next) => {
    try {
        const token=req.cookies.token
        if(!token){
            return res.status(400).json({message:"token not found"})
        }
        const decodeToken=jwt.verify(token,process.env.JWT_SECRET)
        if(!decodeToken){
 return res.status(400).json({message:"token not verify"})
        }
        req.userId=decodeToken.userId
        next()
    } catch (error) {
         return res.status(500).json({message:"isAuth error"})
    }
}

=======
import jwt from "jsonwebtoken"
const isAuth=async (req,res,next) => {
    try {
        const token=req.cookies.token
        if(!token){
            return res.status(400).json({message:"token not found"})
        }
        const decodeToken=jwt.verify(token,process.env.JWT_SECRET)
        if(!decodeToken){
 return res.status(400).json({message:"token not verify"})
        }
        req.userId=decodeToken.userId
        next()
    } catch (error) {
         return res.status(500).json({message:"isAuth error"})
    }
}

>>>>>>> 8b99e06 (new project)
export default isAuth