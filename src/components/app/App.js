import React, { Component } from 'react'
import { Dashboard } from '../dashboard/Dashboard'
import styles from './App.module.css'
import { Header } from '../header/Header'

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Header/>

        <main className={styles.main}>
          <Dashboard/>
        </main>

        <footer className={styles.footer}>
          <span>Made by Abilia crew during Super Crazy Friday</span>
        </footer>
      </div>
    )
  }
}

export default App
