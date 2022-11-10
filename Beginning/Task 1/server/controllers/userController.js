import User from '../models/userModel.js'

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    console.log('Users: ', users[0])

    res.status(200).json({ users: users[0] })

  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createNewUser = async (req, res) => {
  let name = req.body.name
  let birthdate = req.body.birthdate
  let email = req.body.email
  let password = req.body.password

  let user = new User(name, birthdate, email, password)
  console.log(user)

  try {
    let response = await user.save()
    console.log('insertId: ', response[0].insertId)

    res.status(201).json(response)

  } catch (err) {
    res.status(409).json({ message: err.message })
  }
}

export const getUserById = async (req, res) => {
  try {
    const userId = req.params.id

    const user = await User.findById(userId)

    res.status(200).json({ user: user[0].at(0) })

  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}
