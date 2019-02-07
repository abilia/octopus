import React, { Component } from 'react'
import styles from './Dashboard.module.css'
import { FsDataDisruptionSquidContainer } from '../squidFsDataDisruption/FsDataDisruptionSquidContainer'
import { BibleWordOfTodaySquidContainer } from '../squidBibleWordOfToday/BibleWordOfTodaySquidContainer'

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
          colEnd: 5,
          rowStart: 1,
          rowEnd: 13
        },
        {
          id: 2,
          name: 'Dagens bibelord',
          component: <BibleWordOfTodaySquidContainer/>,
          colStart: 5,
          colEnd: 8,
          rowStart: 1,
          rowEnd: 7
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
      <main className={styles.dashboard}>

        {this.state.squids.map(squid => {
          return (
            <article key={squid.id} className={styles.squid} style={this.getStyle(squid)}>
              <header>{squid.name}</header>
              <div className={styles.content}>
                {squid.component}
              </div>
            </article>
          )
        })}
      </main>
    )
  }
}
