import React, { Component } from 'react';
import styles from './LoadingSpinner.module.css';

export class LoadingSpinner extends Component {
  render() {
    return <div className={styles.loadingSpinner}>
      <span>Loading</span>
      <div className={styles.ballThree}/>
      <div className={styles.ballTwo}/>
      <div className={styles.ballOne}/>
    </div>

  }
}
