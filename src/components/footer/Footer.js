import React, { Component } from 'react'
import styles from './Footer.module.css'

export class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <span>Made by Abilia crew during Super Crazy Friday</span>
      </footer>
    )
  }
}
