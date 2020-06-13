const express = require('express')
const router = express.Router()

const TourManagerController = require('../controllers/tour-manager-controller')

router.post('/manager', TourManagerController.addUser)
router.put('/manager/:id', TourManagerController.updateUser)
router.delete('/manager/:id', TourManagerController.deleteUser)
router.get('/manager/:id', TourManagerController.getUser)
router.get('/manager', TourManagerController.getUserList)

module.exports = router
