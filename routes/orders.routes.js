const express = require('express');
const router = express.Router();

const OrderController = require('../controllers/order.controller');

router.get('/orders', OrderController.getAll);
router.get('/orders/:id', OrderController.getOne);
router.post('/orders', OrderController.insertOne);
router.put('/orders/:id', OrderController.updateOne);
router.delete('/orders/:id', OrderController.deleteOne);

module.exports = router;
