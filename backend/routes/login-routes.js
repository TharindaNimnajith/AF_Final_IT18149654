const express = require('express')
const router = express.Router()

const LoginController = require('../controllers/login-controller')

router.post('/register', LoginController.register);
router.post('/login', LoginController.login);
router.put('/user/:id', LoginController.updateUser)
router.delete('/user/:id', LoginController.deleteUser)
router.get('/user/:id', LoginController.getUser)
router.get('/user', LoginController.getCustomerList)

module.exports = router
