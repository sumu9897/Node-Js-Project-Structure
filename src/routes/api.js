const express=require('express');
const StudentController =require("../controllers/StudentController")

const router=express.Router();

router.get("/read",StudentController.ReadStudent)


router.post("/create",StudentController.CreateStudent)

router.put("/update",StudentController.UpdateStudent)

router.delete("/delete",StudentController.DeleteStudent)

