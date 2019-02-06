import React, { Component } from 'react'
import styles from './Header.module.css'

export class Header extends Component {
  render() {
    return (
      <header className={getHeaderClassNames(this.props)}>
        <h1 className={styles.title}>Octopus <span role="img" aria-label="octopus">🐙</span></h1>
      </header>
    )
  }
}

function getHeaderClassNames(headerProps) {
  return `${headerProps.dangerMode ? 'dangerMode' : ''} ${styles.header}`
}
