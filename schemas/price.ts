const mongoose = require('mongoose')

export const priceSchema = new mongoose.Schema({
    amount:{
        type:Number,
    },
    disclaimer:{
        type:String,
    }
})