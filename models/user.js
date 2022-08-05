const mongoose =  require('mongoose')

const userSchema =  new mongoose.Schema({
    userName : {
        type :  String, 
        required: true,
        unique :  true,
        min : 3,
        max: 12

    },
    email :{
        type :  String, 
        required: true,
        unique :  true

    },
    password : {
        type:String,
        required:true,
        min:3,
        max:10
    }

},
{ timestamps :  true})


module.exports = mongoose.model('User', userSchema)


