const mongoose = require('mongoose')
const CitySchema = new mongoose.Schema({
    id: {
        type: Number,
        trim: true,
        required:true,
        default: Date.now()
    },
    district: {
        type: String,
      },
    type: {
        type: String,
      }
})
module.exports = mongoose.model('city', CitySchema)