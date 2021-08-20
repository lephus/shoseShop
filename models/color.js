const mongoose = require('mongoose')
const ColorSchema = new mongoose.Schema({
    id: {
        type: Number,
        trim: true,
        required:true,
        default: Date.now()
    },
    proId: {
        type: Number,
        required: [true, 'must provide id proId'],
      },
    image: {
        type: String,
      },
      increPrice: {
        type: Number,
      }
})
module.exports = mongoose.model('color', ColorSchema)