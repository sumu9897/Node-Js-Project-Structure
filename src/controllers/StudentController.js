const multer=require('multer');
const path = require("path");
const storage=multer.diskStorage({
    destination:function (req,file,cb){
        cb(null,path.resolve(__dirname,'..','files'))
    },
    filename:function (req,file,cb){
        cb(null,file.originalname)
    }

})



//Upload Student Photo

exports.UploadStudentPhoto=(req,res)=>{


}

exports.CreateStudent=(req,res)=>{

    res.end("I am Create Student")
}

exports.DeleteStudent=(req,res)=>{

    res.end("I am Delete Student")
}

exports.UpdateStudent=(req,res)=>{

    res.end("I am Update Student")
}

exports.ReadStudent=(req,res)=>{

    res.end("I am Read Student")
}
