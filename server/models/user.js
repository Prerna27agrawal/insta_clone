const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    pic:{
      type:String,
      default:"https://toppng.com/uploads/preview/app-icon-set-login-icon-comments-avatar-icon-11553436380yill0nchdm.png"
    },
    followers:[{type:ObjectId, ref:"User"}],
    following:[{type:ObjectId,ref:"User"}]
});
mongoose.model("User",userSchema);