import { patientSchema } from "./patient"

const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
    gender: String,
    id: String,
    patients:[patientSchema]
})

export const Accounts = mongoose.model("Accounts", accountSchema)