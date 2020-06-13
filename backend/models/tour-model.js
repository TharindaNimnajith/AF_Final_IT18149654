const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const Schema = mongoose.Schema

const tourSchema = new Schema({
  tourName: {
    type: String,
    required: true,
    trim: true
  },
  tourDescription: {
      type: String,
      required: true,
      trim: true
    },
  destination: {
    type: String,
    required: true,
    trim: true
  },
  startDate: {
    type: Date,
    required: true,
    trim: true
  },
  endDate: {
    type: Date,
    required: true,
    unique: true,
    trim: true
  },
  pricePerPerson: {
    type: Number,
    required: true,
    unique: true,
    trim: true
  }
}, {
  timestamps: true,
  collection: 'Tours'
})

tourSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Tours', tourSchema)
