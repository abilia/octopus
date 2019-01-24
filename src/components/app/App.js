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
          <span>footer</span>
        </footer>
      </div>
    )
  }
}

export default App
