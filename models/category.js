const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
    id: {
        type: Number,
        required:true,
        default: Date.now()
    },
    category: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [70, 'category can not be more than 70 characters'],
      },
})
module.exports = mongoose.model('category', CategorySchema)