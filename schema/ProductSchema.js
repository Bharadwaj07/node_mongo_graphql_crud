const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    category: String,
    productName: String,
    price: Number,
    colors: Object,
})

module.exports = mongoose.model('Product', ProductSchema);