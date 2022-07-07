const mongoose=require("mongoose")

const Userschema=new mongoose.Schema({


    email:{
        type:String,
        unique:true
    },

    password:{
        type:String
    },

    role:{
        type:String
    },
    address:{
        type:String
    },
    first:{
        type:String
    },
    last:{
        type:String
    }

     

   
},
{
    timestamps:true
})

module.exports=mongoose.model("tata",Userschema)