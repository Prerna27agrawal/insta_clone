const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../keys');
const { use } = require("../routes/auth");
const User = mongoose.model("User");
module.exports = (req,res,next)=>{
    const {authorization} = req.headers;
    // authorization === Bearer (token)
    // token is given to user
    if(!authorization){
        return res.status(401).json({error:"You must be logged in"});
    }
     // to access the token
   const token = authorization.replace("Bearer ","");
//    console.log(token);
   jwt.verify(token,JWT_SECRET,(err,payload)=>{
       if(err){
           return res.status(401).json({error:err});
       }
      const{_id} = payload;
       User.findById(_id).then(userdata=>{
            req.user= userdata;
             next();
       });
   })
}