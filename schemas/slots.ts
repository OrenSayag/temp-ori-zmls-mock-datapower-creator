import { Schema } from "mongoose"
import { clinicCodes } from "../hardcodedNextBasement"
import { priceSchema } from "./price"
const faker = require('faker')

const mongoose = require('mongoose')

const slotsSchema = new mongoose.Schema({
    time:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    length:{
        type:Number,
        required:true
    },
    service:{
        type:String,
        required:true
    },
    therapist:{
        type:Schema.Types.ObjectId,
        required:true
    },
    clinic:{
        type:String,
        default: faker.helpers.randomize(clinicCodes)
    },
    isAvailable:{
        type:Boolean,
        default: true
    },
    price: {
        type:priceSchema,
        required: true,
    }
})

export const Slots = mongoose.model("Slots", slotsSchema)

