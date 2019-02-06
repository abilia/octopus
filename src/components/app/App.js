import React, { Component } from 'react'
import { Dashboard } from '../dashboard/Dashboard'
import styles from './App.module.css'
import { Header } from '../header/Header'
import { Footer } from '../footer/Footer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dangerMode: true
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

        <main className={`${styles.main} ${dangerMode ? 'dangerMode' : ''}`}>
          <Dashboard dangerMode={dangerMode} setDangerMode={this.setDangerMode}/>
        </main>

        <Footer/>
      </div>
    )
  }
}

export default App
