import User from '../models/userModel.js'

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    // console.log('Users: ', users[0])

    res.status(200).json({ users: users[0] })

  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const userRegistration = async (req, res) => {
  let photo = req.body.photo
  let name = req.body.name
  let email = req.body.email
  let password = req.body.password
  let country = req.body.country

  let user = new User(photo, name, email, password, country)
  // console.log('User: ', user)

  try {
    await user.save()
    // console.log('response: ', response[0])

    console.log(user)
    res.status(201).json({ user })

  } catch (err) {
    res.status(409).json({ message: err.message })
  }
}

export const userLogin = async (req, res) => {
  let userLogin = req.body
  // console.log(userLogin)

  let userEmail = userLogin.email
  let userPassword = userLogin.password

  try {
    let user = await User.findByEmail(userEmail)
    // console.log("user:", user[0])

    // console.log("userEmail: ", userEmail)
    // console.log("userPassword: ", userPassword)
    // console.log("user[0].at(0).password: ", user[0].at(0).password)

    user[0].at(0).password === userPassword
      ? res.status(200).json({ user: user })
      : res.status(200).json({ response: "Incorrecet password!!!" })

  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const getUserByEmail = async (req, res) => {
  try {
    let email = req.body.email
    let user = await User.findByEmail(email)

    console.log('email: ', email)
    console.log('user: ', user[0])

    res.status(200).json({ user: user[0].at(0) })

  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const getUserById = async (req, res) => {
  try {
    let userId = req.params.id

    let user = await User.findById(userId)

    res.status(200).json({ user: user[0].at(0) })

  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const updateUserById = async (req, res) => {
  try {
    let userId = req.params.id
    let updatedUser = req.body

    let user = await User.updateById(userId, updatedUser)

    res.status(201).json({ affectedRows: user[0].affectedRows })

  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const deleteUserById = async (req, res) => {
  try {
    let userId = req.params.id

    let user = await User.deleteById(userId)

    res.status(200).json({ affectedRows: user[0].affectedRows })

  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}
