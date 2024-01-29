module.exports=(req,res,next)=>{

    console.log("I am AuthMiddleware")
    next()
}