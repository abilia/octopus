import React, { Component } from 'react'
import styles from './Dashboard.module.css'
import { DataDisruptionSquid } from '../squids/squidFsDataDisruption/FsDataDisruptionSquidContainer'
import { BibleWordSquid } from '../squids/squidBibleWordOfToday/BibleWordOfTodaySquidContainer'
import { Squid } from '../squid/Squid'

export class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
      <main className={getMainClassNames(this.props)}>
        {squids.map(squidData => <Squid squidData={squidData} key={squidData.id}/>)}
      </main>
    )
  }
}

function getMainClassNames(dashboardProps) {
  return `${dashboardProps.dangerMode ? 'dangerMode' : ''} ${styles.dashboard}`
}
