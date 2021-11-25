const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
    gender: String,
    id: String,
    patients:Array
})

export const Accounts = mongoose.model("Accounts", accountSchema)