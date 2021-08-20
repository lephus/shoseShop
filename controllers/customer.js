const jwt = require('jsonwebtoken')
const { BadRequestError } = require('../errors')
const asyncWrapper = require('../middleware/async')
const Customer = require('../models/customer')
const { createCustomError } = require('../errors/custom-error')
var md5 = require('md5');

const login = asyncWrapper(async (req, res, next) => {
  const { email, password } = req.body

  if (!email || !password) {
    throw new BadRequestError('Please provide email and password')
  }
    _password = md5(password)
    console.log(_password)
    const cus = await Customer.findOne({ email: email, password: _password })
    if (!cus) {
      return res.status(401).json({ msg: 'login failed'})
    }
    const id = cus.id
    //just for demo, normally provided by DB!!!!
    // try to keep payload small, better experience for user
    // just for demo, in production use long, complex and unguessable string value!!!!!!!!!
    const token = jwt.sign({ id, email },"lehuuphuprojectappmobile20210819", {
        expiresIn: '30d',
    })
    res.status(200).json({ msg: 'login successfully', token })
}) 

const register = asyncWrapper(async (req, res) => {
  const cus = await Customer.findOne({ email: req.body.email})
  if (!cus) {
    const customer = await Customer.create(req.body)
    res.status(201).json({ customer })
  }else{
    return res.status(404).json({ msg: 'Email is exit'})
  }
})

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100)

  res.status(200).json({
    msg: `Hello, ${req.user.id}`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  })
}

module.exports = {
  login,
  register,
  dashboard,
}
