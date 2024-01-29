const express=require('express');
const StudentController =require("../controllers/StudentController")
const AuthMiddleware= require("../middleware/AuthMiddleware")

const router=express.Router();

router.get("/read",StudentController.ReadStudent)


router.post("/create",AuthMiddleware,StudentController.CreateStudent)

router.put("/update",StudentController.UpdateStudent)

router.delete("/delete",AuthMiddleware,StudentController.DeleteStudent)

module.exports=router

