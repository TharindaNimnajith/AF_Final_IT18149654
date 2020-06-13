const express = require('express')
const router = express.Router()

const AdminController = require('../controllers/admin-controller')

router.post('/admin', AdminController.addAdmin)
router.put('/admin/:id', AdminController.updateAdmin)
router.delete('/admin/:id', AdminController.deleteAdmin)
router.get('/admin/:id', AdminController.getAdmin)
router.get('/admin', AdminController.getAdminList)

module.exports = router
