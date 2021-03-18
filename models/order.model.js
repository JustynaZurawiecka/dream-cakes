const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    title: { type: String, required: true },
    count: { type: Number, required: true },
    sum: { type: Number, required: true },
    inscription: { type: String, required: true },
    client: { type: String, required: true },
    email: { type: String, required: true }

});

module.exports = mongoose.model('Order', orderSchema);