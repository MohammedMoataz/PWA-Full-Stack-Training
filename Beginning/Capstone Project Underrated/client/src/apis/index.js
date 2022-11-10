import axios from 'axios'

const userRoute = 'http://localhost:4000/user'
export const getUsers = () => axios.get(`${userRoute}/getAll`)
export const createUser = (newUser) => axios.post(`${userRoute}/registration`, newUser)
export const login = (userLogin) => axios.put(`${userRoute}/login`, userLogin)
export const getUserByEmail = (email) => axios.put(`${userRoute}/getEmail`, email)
export const getUser = (id) => axios.get(`${userRoute}/${id}`)
export const updateUser = (id) => axios.put(`${userRoute}/${id}`)
export const deleteUser = (id) => axios.delete(`${userRoute}/${id}`)


const reelRoute = 'http://localhost:4000/reel'
export const getReels = () => axios.get(`${reelRoute}/getAll`)
export const createReel = (newReel) => axios.post(reelRoute, newReel)
export const getReel = (id) => axios.get(`${reelRoute}/${id}`)
export const updateReel = (id) => axios.put(`${reelRoute}/${id}`)
export const deleteReel = (id) => axios.delete(`${reelRoute}/${id}`)


const mailRoute = 'http://localhost:4000/mail/send'
export const sendMail = (mail) => axios.post(mailRoute, mail)


const fileRoute = 'http://localhost:4000/uploadfile'
const config = { headers: { enctype: 'multipart/form-data' } }
export const uploadFile = (file) => axios.post(`${fileRoute}`, file, config)
