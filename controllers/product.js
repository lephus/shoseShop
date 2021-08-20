const Product = require('../models/product')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')
const getAllProduct = asyncWrapper(async (req, res) => {
  const products = await Product.find({})
    res.status(200).json({ products })
})

const createProduct = asyncWrapper(async (req, res) => {
  const product = await Product.create(req.body)
  res.status(201).json({ product })
})

const getProduct = asyncWrapper(async (req, res, next) => {
  let { id: proID } = req.params
  const product = await Product.findOne({ id: proID })
  if (!product) {
    return res.status(404).json({ msg: `No product with id : ${proID}` })
  }
  res.status(200).json({ product })
})

const getNewProduct = asyncWrapper(async (req, res) => {
  const products = await Product.find({}).limit(20)
    res.status(200).json({ products })
})


module.exports = {
  getAllProduct, 
  getNewProduct, 
  getProduct,
  createProduct
}
