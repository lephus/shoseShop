const express = require('express')
const router = express.Router()
const {  getOrder, createOrder, deleteOrder } = require('../controllers/order')
const authMiddleware = require('../middleware/auth')

router.route('/').get(authMiddleware, getOrder).post(authMiddleware, createOrder)
router.route('/:id').delete(authMiddleware, deleteOrder)
module.exports = router