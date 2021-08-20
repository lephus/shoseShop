const mongoose = require('mongoose')

const TrademarksSchema = new mongoose.Schema({
    id: {
        type: Number,
        required:true,
        default: Date.now()
    },
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [70, 'category can not be more than 70 characters'],
      },
})
module.exports = mongoose.model('trademarks', TrademarksSchema)