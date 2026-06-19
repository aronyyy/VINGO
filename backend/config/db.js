<<<<<<< HEAD
import mongoose from "mongoose"

const connectDb=async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("db connected")
    } catch (error) {
        console.log("db error")
    }
}

=======
import mongoose from "mongoose"

const connectDb=async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("db connected")
    } catch (error) {
        console.log("db error")
    }
}

>>>>>>> 8b99e06 (new project)
export default connectDb