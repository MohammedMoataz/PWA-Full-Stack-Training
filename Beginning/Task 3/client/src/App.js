import React, { Component } from 'react'

import './App.css'
// components
import { MakeRequest } from './components/makeRequest'


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
