import axios from 'axios'

const url = 'http://localhost:4000/users'

export const getUsers = () => axios.get(url)
export const createUser = (newUser) => axios.post(url, newUser)
export const getUser = (id) => axios.get(`${url}/${id}`)
