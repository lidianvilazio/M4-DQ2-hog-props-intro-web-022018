import React, { Component } from 'react'
import MasterHog from '../containers/MasterHog'
import Offspring from '../db.js'
import '../App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      ...Offspring
    }
  }

  render() {
    return (
      <div className="App">
        <MasterHog {...this.state}/>
      </div>
    )
  }

}

export default App
