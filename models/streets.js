const mongoose = require('mongoose')
const StreetSchema = new mongoose.Schema({
    id: {
        type: Number,
        trim: true,
        required:true,
        default: Date.now()
    },
    id_district: {
        type: Number,
        required: [true, 'must provide id district'],
      },
    street: {
        type: String,
      },
    type: {
        type: String,
      }
})
module.exports = mongoose.model('street', StreetSchema)