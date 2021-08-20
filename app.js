require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()
const connect = require('./database/connect')
const customerRouter = require('./routes/customer')
const notFoundMiddleware = require('./middleware/not-found')
const productRouter = require('./routes/product')
const orderRouter = require('./routes/order')

// middleware
app.use(express.static('./public'))
app.use(express.json())

app.use('/api/customer/', customerRouter)
app.use('/api/product/', productRouter)
app.use('/api/order/', orderRouter)
app.use(notFoundMiddleware)

const port = process.env.PORT || 5000

const start = async () => {
  try {
    await connect("mongodb://localhost:27017/shose_shop")
    app.listen(port, console.log(`Server is listening on port ${port}...`))
  } catch (error) {
    console.log(error)
  }
}

start()