const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const TourManagerRoutes = require('./routes/tour-manager-routes')
const AdminRoutes = require('./routes/admin-routes')
const TourRoutes = require('./routes/tour-routes')
const LoginRoutes = require('./routes/login-routes')

require('dotenv').config()

const app = express()

app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

app.use(bodyParser.json())
app.use(cors())

app.use('/manager', TourManagerRoutes)
app.use('/admin', AdminRoutes)
app.use('/tour', TourRoutes)
app.use('/login', LoginRoutes)

const uri = process.env.ATLAS_URI
const port = process.env.PORT || 5000

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  dbName: 'it18149654'
}

mongoose
  .connect(uri, options)
  .then(() => {
    app.listen(port)
    console.log(`Server is running on port: ${port}`)
  })
  .catch((error) => {
    console.log(error)
  })
