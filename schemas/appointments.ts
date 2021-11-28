import { Schema } from "mongoose"

const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema({
    status:{
        type:String,
        default: 'scheduled',
        enum:['scheduled', 'pending_payment', 'canceled'],
    },
    slot: {
        type: Schema.Types.ObjectId,
        required:true
    },
    expiresAt: {
        type:Number,
        required:true,
        default: 1234
    },
    linkedToPatient: {
        type: String,
        required:true
    }
})

export const Appointments = mongoose.model("Appointments", appointmentSchema)