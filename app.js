const express =require('express')
constcors=require('cors')
const router= require('./src/routes/api')
const  obj=new express()


obj.use('/',router)
obj.use(cors)



module.exports=obj;