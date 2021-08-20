const mongoose = require('mongoose')
const CustomerSchema = new mongoose.Schema({
    id: {
        type: Number,
        trim: true,
        required:true,
        default: Date.now()
    },
    image: {
        type: String,
        required: [true, 'must provide image profile'],
        trim: true,
      },
    fullName: {
        type: String,
        required: [true, 'must provide full name'],
        trim: true,
      },
    address: {
        type: String,
        required: [true, 'must provide address'],
        trim: true,
      },
    age: {
        type: Number,
        required: [true, 'must provide age'],
      },
    email: {
        type: String,
        required: [true, 'must provide email'],
        trim: true,
      },
    password: {
        type: String,
        required: [true, 'must provide password'],
        trim: true,
      },
})
module.exports = mongoose.model('customer', CustomerSchema)