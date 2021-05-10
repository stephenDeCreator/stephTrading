const express = require('express');
const { verifyToken } = require('../controllers/authController');
const router = express.Router();
const productController = require('../controllers/productControllers');
const upload = require('../fileUpload');

router.get('/', productController.getAllProducts);

router.get('/:id', verifyToken, productController.getProduct);

router.post('/', upload, productController.createProduct);

router.patch('/:id', verifyToken, productController.updateProduct);

router.delete('/:id', verifyToken, productController.deleteProduct);

module.exports = router;
