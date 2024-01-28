const express =require('express')
const cors=require('cors')
const helmet=require('helmet')
const  hpp=require('hpp')
const router= require('./src/routes/api')
const  obj=new express()


obj.use('/',router)
obj.use(cors)
obj.use(helmet())
obj.use(hpp)



module.exports=obj;