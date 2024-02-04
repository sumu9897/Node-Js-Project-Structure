const multer=require('multer');
const path = require("path");
// const {options} = require("axios");
const storage=multer.diskStorage({
    destination:function (req,file,cb){
        cb(null,path.resolve(__dirname,'..','files'))
    },
    filename:function (req,file,cb){
        cb(null,file.originalname)
    }

})

const upload=multer({storage:storage})

//Upload Student Photo

exports.UploadStPhoto=async (req,res)=>{

    const moveFile=upload.single('stImg');

    await new Promise((resolve, reject)=>{
        moveFile(req,{},(err)=>{
            if(err){
                reject(err)
            }
            else{
                resolve()
            }
        })
    });


    return res.end("Uploaded")


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
