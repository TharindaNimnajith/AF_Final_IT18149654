const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
  firstName: {
    type: String,
    trim: true
  },
  lastName: {
    type: String,
    trim: true
  },
  phoneNo: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  nic: {
    type: String,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    default: 'Customer'
  }
}, {
  timestamps: true,
  collection: 'Users'
})

userSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Users', userSchema)
