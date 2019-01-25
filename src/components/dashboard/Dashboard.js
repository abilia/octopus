import React, { Component } from 'react'
import styles from './Dashboard.module.css'
import { FsDataDisruptionSquidContainer } from '../RssFeedSquid/FsDataDisruptionSquidContainer'

export class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squids: [
        {
          id: 0,
          name: 'Squid 1',
          colStart: 7,
          colEnd: 20,
          rowStart: 3,
          rowEnd: 21
        },
        {
          id: 1,
          name: 'Driftstörningar',
          component: <FsDataDisruptionSquidContainer/>,
          colStart: 1,
          colEnd: 8,
          rowStart: 2,
          rowEnd: 15
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
        {this.state.squids.map(squid => {
          return (
            <div key={squid.id} className={styles.squid} style={this.getStyle(squid)} data-name={squid.name}>
              {squid.component}
            </div>
          )
        })}
      </div>
    )
  }
}
