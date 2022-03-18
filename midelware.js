const midelware=(req,res,next)=>{
    const x=false
 if(!x){
     return res.status(400).json({msg:"you are not authorized"})
 }
 else{
   next();
 }
}
module.exports=midelware