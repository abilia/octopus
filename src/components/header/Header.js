import React, { Component } from 'react'
import styles from './Header.module.css';

export class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <h1 className={styles.title}>Octopus <span role="img" aria-label="octopus">🐙</span></h1>
      </header>
    )
  }
}
