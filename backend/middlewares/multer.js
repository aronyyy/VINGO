<<<<<<< HEAD
import multer from "multer"
const storage=multer.diskStorage({
   destination:(req,file,cb)=>{
    cb(null,"./public")
   },
   filename:(req,file,cb)=>{
    cb(null,file.originalname)
   }
})

=======
import multer from "multer"
const storage=multer.diskStorage({
   destination:(req,file,cb)=>{
    cb(null,"./public")
   },
   filename:(req,file,cb)=>{
    cb(null,file.originalname)
   }
})

>>>>>>> 8b99e06 (new project)
export const upload=multer({storage})