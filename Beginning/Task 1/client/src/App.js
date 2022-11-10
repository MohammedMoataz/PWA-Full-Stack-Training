import React, { useState, useEffect } from "react"
import ReactDOM from 'react-dom/client'

import { getUsers, createUser, getUser } from './api/index.js'
import './App.css'

const App = () => {

  const [name, setName] = useState("")
  const [birthdate, setBirthdate] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState({})

  useEffect(() => {
    getUsers().then(res => console.log('users: ', res.data.users))
  }, [])

  useEffect(() => {
    setUser({
      name: name,
      birthdate: birthdate,
      email: email,
      password: password
    })
  }, [name, birthdate, email, password])

  const postUser = async e => {
    e.preventDefault()

    console.log('User: ', user)

    await createUser(user)
      .then(res => {
        console.log(res.data[0].insertId)

        viewData(res.data[0].insertId)
      })
      .catch(err => console.error(err))
  }

  const viewData = async (id) => {
    await getUser(id)
      .then(res => {
        ReactDOM.createRoot(document.getElementById('res')).render(
          <section>
            <header>Thank you for your request. The serverApp received the following information and soon will be able to save this data into the database:</header>
            <ul>
              <li>name: {res.data.user.strName}</li>
              <li>birthdate: {res.data.user.dtmDOB.substring(0, 10)}</li>
              <li>email: {res.data.user.strEmail}</li>
              <li>password: {res.data.user.strPassword}</li>
            </ul>
          </section>
        )
      })
      .catch(err => console.error(err))
  }

  return (
    <div className="App">
      <form className="App-header">
        <label>Username</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <label>BirthDate</label>
        <input type="date" value={birthdate} onChange={e => setBirthdate(e.target.value)} />
        <label>Email</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={postUser}>Submit</button>
      </form>
      <hr />
      <div id="res"></div>
    </div>
  )
}

export default App