const mongoose= require('mongoose')

const programmerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    secretno:{
        type: Number,
        required:true,
        unique:true
    },
    tech:{
        type:String,
        required:true
    },
    new:{
        type:Boolean,
        required:true,
        default:true
    }
})


module.exports= mongoose.model('schema',programmerSchema)