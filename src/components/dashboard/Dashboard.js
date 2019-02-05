import React, { Component } from 'react'
import styles from './Dashboard.module.css'
import { FsDataDisruptionSquidContainer } from '../squidFsDataDisruption/FsDataDisruptionSquidContainer'
import { BibleWordOfTodaySquidContainer } from "../squidBibleWordOfToday/BibleWordOfTodaySquidContainer";

export class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squids: [
        {
          id: 1,
          name: 'Driftstörningar',
          component: <FsDataDisruptionSquidContainer/>,
          colStart: 1,
          colEnd: 12,
          rowStart: 1,
          rowEnd: 20
        },
        {
          id: 2,
          name: 'Dagens bibelord',
          component: <BibleWordOfTodaySquidContainer/>,
          colStart: 1,
          colEnd: 25,
          rowStart: 20,
          rowEnd: 25
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
        {/*<div className={styles.squid} style={{gridColumnStart:1, gridColumnEnd:3, gridRowStart:1, gridRowEnd: 2}}>Sqid Sqid Sqid Sqid Sqid Sqid Sqid Sqid Sqid Sqid </div>
        <div className={styles.squid} style={{gridColumnStart:1, gridColumnEnd:12, gridRowStart:12, gridRowEnd: 24}}>Sqid</div>*/}
      </div>
    )
  }
}
