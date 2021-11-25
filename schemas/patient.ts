const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
    id: String,
    firstName: String,
    lastName: String,
    gender: String,
    
    patients:Array
})

export const Patients = mongoose.model("Patients", patientSchema)