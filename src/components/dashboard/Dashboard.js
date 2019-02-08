import React, { Component } from 'react'
import styles from './Dashboard.module.css'
import { DataDisruptionSquid } from '../squidFsDataDisruption/FsDataDisruptionSquidContainer'
import { BibleWordSquid } from '../squidBibleWordOfToday/BibleWordOfTodaySquidContainer'
import { Squid } from '../squid/Squid'

export class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dangerMode: false,
      squids: [
        {
          name: 'Driftstörningar',
          component: <DataDisruptionSquid/>,
          colStart: 1,
          colEnd: 5,
          rowStart: 1,
          rowEnd: 13
        },
        {
          name: 'Dagens bibelord',
          component: <BibleWordSquid/>,
          colStart: 5,
          colEnd: 8,
          rowStart: 1,
          rowEnd: 7
        }
      ]
    }
  }

  configureSquid(squids) {
    squids.forEach((squid, index) => {
      squid.id = index
      squid.setDangerMode = this.props.dangerMode
    })

    return squids
  }

  render() {
    const squids = this.configureSquid(this.state.squids)

    return (
      <main className={styles.dashboard}>
        {squids.map(squidData => <Squid squidData={squidData} key={squidData.id}/>)}
      </main>
    )
  }
}
