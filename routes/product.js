const express = require('express')
const router = express.Router()
const { getAllProduct,  getNewProduct, getProduct, createProduct } = require('../controllers/product')
const authMiddleware = require('../middleware/auth')

router.route('/get-all').get(authMiddleware, getAllProduct)
router.route('/get-new').get(authMiddleware, getNewProduct)
router.route('/:id').get(authMiddleware, getProduct)
module.exports = router
