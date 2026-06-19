<<<<<<< HEAD
import mongoose from "mongoose";

const deliveryAssignmentSchema = new mongoose.Schema({
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order"
    },
    shop: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Shop"
    },
    shopOrderId:{
         type: mongoose.Schema.Types.ObjectId,
         required:true
    },
    brodcastedTo:[
        {
         type: mongoose.Schema.Types.ObjectId,
         ref:"User"
    }
    ],
    assignedTo:{
        type: mongoose.Schema.Types.ObjectId,
         ref:"User",
         default:null
    },
    status:{
        type:String,
        enum:["brodcasted","assigned","completed"],
        default:"brodcasted"
    }
    ,
    acceptedAt:Date
}, { timestamps: true })

const DeliveryAssignment=mongoose.model("DeliveryAssignment",deliveryAssignmentSchema)
=======
import mongoose from "mongoose";

const deliveryAssignmentSchema = new mongoose.Schema({
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order"
    },
    shop: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Shop"
    },
    shopOrderId:{
         type: mongoose.Schema.Types.ObjectId,
         required:true
    },
    brodcastedTo:[
        {
         type: mongoose.Schema.Types.ObjectId,
         ref:"User"
    }
    ],
    assignedTo:{
        type: mongoose.Schema.Types.ObjectId,
         ref:"User",
         default:null
    },
    status:{
        type:String,
        enum:["brodcasted","assigned","completed"],
        default:"brodcasted"
    }
    ,
    acceptedAt:Date
}, { timestamps: true })

const DeliveryAssignment=mongoose.model("DeliveryAssignment",deliveryAssignmentSchema)
>>>>>>> 8b99e06 (new project)
export default DeliveryAssignment