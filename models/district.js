const mongoose = require('mongoose')
const DistrictSchema = new mongoose.Schema({
    id: {
        type: Number,
        trim: true,
        required:true,
        default: Date.now()
    },
    id_city: {
        type: Number,
        required: [true, 'must provide id district'],
      },
    district: {
        type: String,
      },
    type: {
        type: String,
      }
})
module.exports = mongoose.model('district', DistrictSchema)