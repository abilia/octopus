import React, { Component } from 'react'
import styles from './Dashboard.module.css'

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squids: [
        {
          name: 'Squid 1',
          colStart: 7,
          colEnd: 20,
          rowStart: 3,
          rowEnd: 21
        }
      ]
    }
  }
  getStyle(squid) {
    return {
      gridColumnStart: squid.colStart,
      gridColumnEnd: squid.colEnd,
      gridRowStart: squid.rowStart,
      gridRowEnd: squid.rowEnd
    }
  }

  render() {
    return (
      <div className={styles.dashboard}>
        {this.state.squids.map(squid => <div className={styles.squid} style={this.getStyle(squid)}/>)}
      </div>
    )
  }
}
