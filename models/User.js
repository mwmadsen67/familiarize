const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username:{
        type:String,
        require: true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type: String,
        required: true,
        select: false
    },
    date:{
        type:String,
        default: Date.now
    }
})

User = mongoose.model("users", UserSchema);
module.exports = User