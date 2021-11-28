    const mongoose = require('mongoose')

    export const locationSchema = new mongoose.Schema({
        lat:{
            type:Number,
            required:true,
            default: Math.random() * (33.026 - 29.587) + 29.587
        },
        lng:{
            type:Number,
            required:true,
            default: Math.random() * (35.6 - 34.77) + 34.77
        },
        radius:{
            type:Number,
            default: 10
        }
    })