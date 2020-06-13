const express = require('express')
const router = express.Router()

const TourController = require('../controllers/tour-controller')

router.post('/tour', TourController.addTour)
router.put('/tour/:id', TourController.updateTour)
router.delete('/tour/:id', TourController.deleteTour)
router.get('/tour/:id', TourController.getTour)
router.get('/tour', TourController.getTourList)

module.exports = router
