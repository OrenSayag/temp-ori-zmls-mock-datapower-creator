import { Schema } from "mongoose"

const mongoose = require('mongoose')

const Address = new mongoose.Schema({
    district:String,
    cityCode:{
        type: Number,
        required:true
    },
    city:{
        type: String,
        required:true
    },
    street:{
        type: String,
        required:true
    },
})

export const patientSchema = new mongoose.Schema({
    id: {
        type:String,
        required:true
    },
    firstName: {
        type:String,
        required:true
    },
    lastName: {
        type:String,
        required:true
    },
    gender: {
        type:String,
        enum: ['male', 'female'],
        required:true
    },
    address: {
        type:Address,
        required:true
    },
    dateOfBirth: {
        type: Date,
        required:true,
    },
})
export const Patients = mongoose.model("Patients", patientSchema)