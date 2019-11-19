```javascript
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
        type:String,
        required:true
    },
    date:{
        type:String,
        default: Date.now
    }
})

const Child = new Schema({
    name:{
        type:String,
        ref:"children",
        ref:"trees"
    },

})
```