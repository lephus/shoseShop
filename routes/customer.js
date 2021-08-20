const express = require('express')
const router = express.Router()
const { login,register, dashboard } = require('../controllers/customer')
const authMiddleware = require('../middleware/auth')

router.route('/dashboard').get(authMiddleware, dashboard)
router.route('/login').post(login)
router.route('/register').post(register)
module.exports = router
