const mongoose = require('mongoose')
let ts = Date.now();

let date_ob = new Date(ts);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();
const _date = year + "-" + month + "-" + date
const OrderSchema = new mongoose.Schema({
    id: {
        type: Number,
        trim: true,
        required:true,
        default: Date.now()
    },
    id_product: {
        type: Number,
        required: [true, 'must provide id product'],
      },
    id_size: {
        type: Number,
        required: [true, 'must provide sale'],
      },
    id_color: {
        type: Number,
        required: [true, 'must provide id color'],
      },
    id_customer: {
        type: Number,
        required: [true, 'must provide id customer'],
      },
    quantity: {
        type: Number,
        required: [true, 'must provide id quantity'],
      },
    created:{
        type: String,
        default: _date
    }
})
module.exports = mongoose.model('order', OrderSchema)