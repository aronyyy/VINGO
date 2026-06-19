<<<<<<< HEAD
import jwt from "jsonwebtoken"

const genToken=async (userId) => {
    try {
        const token= jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:"7d"})
        return token
    } catch (error) {
        console.log(error)
    }
}

=======
import jwt from "jsonwebtoken"

const genToken=async (userId) => {
    try {
        const token= jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:"7d"})
        return token
    } catch (error) {
        console.log(error)
    }
}

>>>>>>> 8b99e06 (new project)
export default genToken