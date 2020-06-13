const express = require('express')
const router = express.Router()

const TourManagerController = require('../controllers/tour-manager-controller')

router.post('/manager', TourManagerController.addTourManager)
router.put('/manager/:id', TourManagerController.updateTourManager)
router.delete('/manager/:id', TourManagerController.deleteTourManager)
router.get('/manager/:id', TourManagerController.getTourManager)
router.get('/manager', TourManagerController.getTourManagerList)

module.exports = router
