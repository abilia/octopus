import React, { Component } from 'react';
import { Dashboard } from './components/dashboard/Dashboard';
import styles from './App.module.css';
import './normalize.css';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <header>
          <h1>Octopus</h1>
        </header>

        <main className={styles.main}>
          <Dashboard/>
        </main>

        <footer>
          <span>footer</span>
        </footer>
      </div>
    );
  }
}

export default App;
