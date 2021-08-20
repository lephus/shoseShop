const mongoose = require('mongoose')
const SizeSchema = new mongoose.Schema({
    id: {
        type: Number,
        trim: true,
        required:true,
        default: Date.now()
    },
    proId: {
        type: Number,
        required: [true, 'must provide id product'],
      },
    size: {
        type: Number,
        required: [true, 'must provide size'],
      },
    number: {
        type: Number,
        required: [true, 'must provide number'],
    }
})
module.exports = mongoose.model('size', SizeSchema)