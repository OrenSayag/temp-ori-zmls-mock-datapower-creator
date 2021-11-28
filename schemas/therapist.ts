import { clinicCodes } from "../hardcodedNextBasement";

const mongoose = require('mongoose');

const therapistSchema = new mongoose.Schema({
    id: String,
    israeliId:String,
    firstName: String,
    lastName: String,
    gender: String,
    languages: Array,
    title: String,
    clinics: {type:[String],required:true},
    type: String,
})

export const Therapists = mongoose.model("Therapists", therapistSchema)

