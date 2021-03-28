const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    title: { type: String },
    count: { type: Number },
    sum: { type: Number },
    inscription: { type: String },
    client: { type: String, required: true },
    email: { type: String, required: true }

});

module.exports = mongoose.model('Order', orderSchema);