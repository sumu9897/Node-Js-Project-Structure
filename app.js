const express =require('express')
const router= require('./src/routes/api')
const  obj=new express()


obj.use('/',router)



module.exports=obj;