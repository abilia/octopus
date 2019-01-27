import React, { Component } from 'react'
import { Dashboard } from '../dashboard/Dashboard'
import styles from './App.module.css'
import { Header } from '../header/Header'
import { Footer } from '../footer/Footer'

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Header/>

        <main className={styles.main}>
          <Dashboard/>
        </main>

        <Footer/>
      </div>
    )
  }
}

export default App
