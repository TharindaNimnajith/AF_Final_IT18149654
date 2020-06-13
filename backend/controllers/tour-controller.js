const Tour = require('../models/tour-model')

require('dotenv').config()

const addTour = async (req, res, next) => {
  let existingTourName

  const {
    tourName,
    tourDescription,
    destination,
    startDate,
    endDate,
    pricePerPerson
  } = req.body

  try {
    existingTourName = await Tour.findOne({
      tourName: tourName
    })
  } catch (error) {
    return next('Unexpected internal server error occurred, please try again later.')
  }

  if (existingTourName) {
    await res.json({
      exists: true,
      message: 'A tour with the same name already exists.'
    })
    return next('A tour with the same name already exists.')
  }

  const newTour = new Tour({
    tourName,
    tourDescription,
    destination,
    startDate,
    endDate,
    pricePerPerson
  })

  try {
    await newTour.save()
  } catch (error) {
    return next('Unexpected internal server error occurred, please try again later.')
  }

  res.status(201).send({
    message: 'New tour added successfully!'
  })
}

const updateTour = async (req, res, next) => {
  let tour
  let existingTourName

  const {
    id
  } = req.params

  const {
    tourName,
    tourDescription,
    destination,
    startDate,
    endDate,
    pricePerPerson
  } = req.body

  try {
    tour = await Tour.findById(id)
  } catch (error) {
    return next('Unexpected internal server error occurred, please try again later.')
  }

  try {
    existingTourName = await Tour.findOne({
      tourName: tourName
    })
  } catch (error) {
    return next('Unexpected internal server error occurred, please try again later.')
  }

  if (existingTourName && tourName !== tour.tourName) {
    await res.json({
      exists: true,
      message: 'A tour with the same name already exists.'
    })
    return next('A tour with the same name already exists.')
  }

  tour.tourName = tourName
  tour.tourDescription = tourDescription
  tour.destination = destination
  tour.startDate = startDate
  tour.endDate = endDate
  tour.pricePerPerson = pricePerPerson

  try {
    await tour.save()
  } catch (error) {
    return next('Unexpected internal server error occurred, please try again later.')
  }

  res.status(200).send({
    message: 'Tour updated successfully!'
  })
}

const deleteTour = async (req, res, next) => {
  let tour

  const {
    id
  } = req.params

  try {
    tour = await Tour.findById(id)
    await tour.remove()
  } catch (error) {
    return next('Unexpected internal server error occurred, please try again later.')
  }

  res.status(200).send({
    message: 'Tour deleted successfully!'
  })
}

const getTour = async (req, res, next) => {
  let tour

  const {
    id
  } = req.params

  try {
    tour = await Tour.findById(id)
  } catch (error) {
    return next('Unexpected internal server error occurred, please try again later.')
  }

  res.status(200).send(tour)
}

const getTourList = async (req, res, next) => {
  let tourList

  try {
    tourList = await Tour.find({})
  } catch (error) {
    return next('Unexpected internal server error occurred, please try again later.')
  }

  res.status(200).send(tourList)
}

exports.addTour = addTour
exports.updateTour = updateTour
exports.deleteTour = deleteTour
exports.getTour = getTour
exports.getTourList = getTourList
