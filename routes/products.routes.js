const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/product.controller');

router.get('/products', ProductController.getAll);
router.get('/products/:id', ProductController.getOne);

module.exports = router;
