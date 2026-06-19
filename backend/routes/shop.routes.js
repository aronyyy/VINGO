<<<<<<< HEAD
import express from "express"
import { createEditShop, getMyShop, getShopByCity } from "../controllers/shop.controllers.js"
import isAuth from "../middlewares/isAuth.js"
import { upload } from "../middlewares/multer.js"



const shopRouter=express.Router()

shopRouter.post("/create-edit",isAuth,upload.single("image"),createEditShop)
shopRouter.get("/get-my",isAuth,getMyShop)
shopRouter.get("/get-by-city/:city",isAuth,getShopByCity)

=======
import express from "express"
import { createEditShop, getMyShop, getShopByCity } from "../controllers/shop.controllers.js"
import isAuth from "../middlewares/isAuth.js"
import { upload } from "../middlewares/multer.js"



const shopRouter=express.Router()

shopRouter.post("/create-edit",isAuth,upload.single("image"),createEditShop)
shopRouter.get("/get-my",isAuth,getMyShop)
shopRouter.get("/get-by-city/:city",isAuth,getShopByCity)

>>>>>>> 8b99e06 (new project)
export default shopRouter