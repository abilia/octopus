import React, { Component } from 'react'
import { Dashboard } from '../dashboard/Dashboard'
import styles from './App.module.css'
import { Header } from '../header/Header'
import { Footer } from '../footer/Footer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dangerMode: false
    }
  }

  setDangerMode = (mode) => {
    this.setState({
      dangerMode: mode
    })
  }

  render() {
    const {dangerMode} = this.state

    return (
      <div className={styles.app}>
        <Header dangerMode={dangerMode}/>

        <Dashboard dangerMode={dangerMode} setDangerMode={this.setDangerMode}/>

        <Footer/>
      </div>
    )
  }
}

export default App
