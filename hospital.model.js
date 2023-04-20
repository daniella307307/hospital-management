const mongoose=require('mongoose');

var hospitalSchema=new mongoose.Schema({

    hospitalName:{
        type:String,
        required:'this field is required'
    },
    hospitalId:{
        type:String
    },
    hospital_director:{
        type:String
    },
    hospitalFees:{
        type:String
    },
    hospital_workers:{
        type:Number
    },
    discount:{
        type:Number
    }
})

mongoose.model('Hospital',hospitalSchema);