import React, { Component } from 'react'

import './App.css'
// components
import { MakeRequest } from './components/MakeRequest.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <MakeRequest />
      </div >
    )
  }
}

export default App
