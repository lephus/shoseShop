const mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema({
    id: {
        type: String,
        trim: true,
        required:true,
        default: Date.now()
    },
    proName: {
        type: String,
        required: [true, 'must provide name product'],
        trim: true,
      },
    content: {
        type: String,
        required: [true, 'must provide content'],
        trim: true,
      },
    proPrice: {
        type: Number,
        required: [true, 'must provide price'],
      },
    proSale: {
        type: Number,
        required: [true, 'must provide sale'],
      },
    id_trademark: {
        type: Number,
        required: [true, 'must provide id trademark'],
      },
    id_category: {
        type: Number,
        required: [true, 'must provide id category'],
      },
})
module.exports = mongoose.model('product', ProductSchema)