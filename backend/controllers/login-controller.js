const User = require('../models/user-model')

const register = async (req, res, next) => {
  let existingUserEmail
  let existingUserNIC

  const {
    firstName,
    lastName,
    phoneNo,
    email,
    nic,
    password
  } = req.body

  try {
    existingUserEmail = await User.findOne({
      email: email
    })
    existingUserNIC = await User.findOne({
      nic: nic
    })
  } catch (error) {
    return next('Unexpected internal server error occurred, please try again later.')
  }

  if (existingUserEmail) {
    await res.json({
      exists: true,
      message: 'A user with the same email already exists.'
    })
    return next('A user with the same email already exists.')
  }

  if (existingUserNIC) {
    await res.json({
      exists: true,
      message: 'A user with the same NIC already exists.'
    })
    return next('A user with the same NIC already exists.')
  }

  const newUser = new User({
    firstName,
    lastName,
    phoneNo,
    email,
    nic,
    password
  })

  try {
    await newUser.save()
  } catch (error) {
    return next('Unexpected internal server error occurred, please try again later.')
  }

  res.status(201).send({
    message: 'Customer registered added successfully!'
  })
}

const login = async (req, res, next) => {
  const {
    email,
    password
  } = req.body

  let existingUser

  try {
    existingUser = await User.findOne({
      email: email
    })
  } catch (error) {
    res.send({
      message: 'Login failed, please try again later.',
      login: 0
    })

    return next(error)
  }

  if (!existingUser || existingUser.password !== password) {
    res.send({
      message: 'Invalid username or password.',
      login: 0
    })

    return next(error)
  }

  res.send({
    message: 'Logged in!',
    login: 1,
    type: existingUser.type,
    userDetails: existingUser
  })
}

const updateUser = async (req, res, next) => {
  let user
  let existingUserEmail
  let existingUserNIC

  const {
    id
  } = req.params

  const {
    firstName,
    lastName,
    phoneNo,
    email,
    nic,
    password
  } = req.body

  try {
    user = await User.findById(id)
  } catch (error) {
    return next('Unexpected internal server error occurred, please try again later.')
  }

  try {
    existingUserEmail = await User.findOne({
      email: email
    })
    existingUserNIC = await User.findOne({
      nic: nic
    })
  } catch (error) {
    return next('Unexpected internal server error occurred, please try again later.')
  }

  if (existingUserEmail && email !== user.email) {
    await res.json({
      exists: true,
      message: 'A user with the same email already exists.'
    })
    return next('A user with the same email already exists.')
  }

  if (existingUserNIC && nic !== user.nic) {
    await res.json({
      exists: true,
      message: 'A user with the same NIC already exists.'
    })
    return next('A user with the same NIC already exists.')
  }

  user.firstName = firstName
  user.lastName = lastName
  user.teleNo = phoneNo
  user.email = email
  user.nic = nic
  user.password = password

  try {
    await user.save()
  } catch (error) {
    return next('Unexpected internal server error occurred, please try again later.')
  }

  res.status(200).send({
    message: 'User updated successfully!'
  })
}

const deleteUser = async (req, res, next) => {
  let user

  const {
    id
  } = req.params

  try {
    user = await User.findById(id)
    await user.remove()
  } catch (error) {
    return next('Unexpected internal server error occurred, please try again later.')
  }

  res.status(200).send({
    message: 'User deleted successfully!'
  })
}

const getUser = async (req, res, next) => {
  let user

  const {
    id
  } = req.params

  try {
    user = await User.findById(id)
  } catch (error) {
    return next('Unexpected internal server error occurred, please try again later.')
  }

  res.status(200).send(user)
}

const getCustomerList = async (req, res, next) => {
  let customerList

  try {
    customerList = await User.find({
      type: 'Customer'
    })
  } catch (error) {
    return next('Unexpected internal server error occurred, please try again later.')
  }

  res.status(200).send(customerList)
}

exports.register = register
exports.login = login
exports.updateUser = updateUser
exports.deleteUser = deleteUser
exports.getUser = getUser
exports.getCustomerList = getCustomerList
