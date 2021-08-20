const Order = require('../models/order')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

const createOrder = asyncWrapper(async (req, res) => {
  const order = await Order.create(req.body)
  res.status(201).json({ order })
})

const getOrder = asyncWrapper(async (req, res, next) => {
  const customerID = req.user.id
  const order = await Order.find({ id_customer: customerID })
  res.status(200).json({ order })
})

const deleteOrder = asyncWrapper(async (req, res, next) => {
  const { id: orderID } = req.params
  const task = await Order.findOneAndDelete({ id: orderID })
  if (!task) {
    return next(createCustomError(`No order with id : ${taskID}`, 404))
  }
  res.status(200).json({ task })
})

// const updateTask = asyncWrapper(async (req, res, next) => {
//   const { id: taskID } = req.params
//   const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
//     new: true,
//     runValidators: true,
//   })
//   if (!task) {
//     return next(createCustomError(`No task with id : ${taskID}`, 404))
//   }
//   res.status(200).json({ task })
// })

module.exports = {
  getOrder,
  createOrder,
  deleteOrder
}
