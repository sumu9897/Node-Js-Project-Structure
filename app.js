const express =require('express')
const cors=require('cors')
const helmet=require('helmet')
const router= require('./src/routes/api')
const  obj=new express()


obj.use('/',router)
obj.use(cors)
obj.use(helmet())



module.exports=obj;