const Order = require('../models/order.model');

exports.getAll = async (req, res) => {
    try {
        res.json(await Order.find());
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
};

exports.getOne = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) res.status(404).json({ message: 'Not found' });
        else res.json(order);
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
};

exports.insertOne = async (req, res) => {
    try {
        const { title, price, count, inscription, client, email } = req.body;
        const newOrder = new Order({ title: title, price: price, count: count, inscription: inscription, client: client, email: email });
        await newOrder.save();
        res.json({ message: 'OK' });
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
};

exports.updateOne = async (req, res) => {
    try {
        const { title, price, count, inscription, client, email } = req.body;
        if (order) {
            await Order.updateOne({ _id: req.params.id }, { $set: { title: title, price: price, count: count, inscription: inscription, client: client, email: email } });
            res.json({ message: 'OK' });
            res.json(order);
        }
        else res.status(404).json({ message: err });
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
};

exports.deleteOne = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (order) {
            await Order.deleteOne({ _id: req.params.id });
            res.json({ message: 'OK' });
            res.json(order)
        }
        else res.status(404).json({ message: 'Not found' });
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
};
