import React, { Component } from 'react'
import styles from './Dashboard.module.css'
import { FsDataDisruptionSquidContainer } from '../squidFsDataDisruption/FsDataDisruptionSquidContainer'
import { BibleWordOfTodaySquidContainer } from '../squidBibleWordOfToday/BibleWordOfTodaySquidContainer'
import { Squid } from '../squid/Squid'

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

  render() {
    return (
      <main className={styles.dashboard}>
        {this.state.squids.map(squidData => <Squid squidData={squidData} key={squidData.id}/>)}
      </main>
    )
  }
}
