const express =require('express')
const router= require('./src/routes/api')

app.use('/',router)

module.exports=app;