import express from "express"
import { addBook } from "../controllers/bookController.js"
import multer from "multer"

const bookRouter=express.Router();

//Image storage engine
const storage=multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload=multer({storage:storage})

bookRouter.post("/add",upload.single("image"),addBook)


export default bookRouter;