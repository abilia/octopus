import React, { Component } from 'react'
import styles from './Dashboard.module.css'
import { Squid } from '../squid/Squid'
// import { DataDisruptionSquid } from '../squids/squidFsDataDisruption/FsDataDisruptionSquidContainer'
// import { BibleWordSquid } from '../squids/squidBibleWordOfToday/BibleWordOfTodaySquidContainer'
import { CheckCertificateSquid } from "../squids/squidCheckCertificate/CheckCertificateSquidContainer";
// import { AdventOfCodeSquid } from "../squids/squidAdventOfCode/AdventOfCodeSquidContainer";
import { PlaceholderSquid } from '../squids/squidPlaceholder/PlaceholderSquidContainer';

export class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      squids: [
        /*
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
        },*/
        {
          name: 'myAbilia certificate',
          component: <CheckCertificateSquid setDangerMode={this.props.setDangerMode}/>,
          colStart: 8,
          colEnd: 13,
          rowStart: 1,
          rowEnd: 5
        },
        /*
        {
          name: 'AdventOfCode 2019',
          component: <AdventOfCodeSquid />,
          colStart: 5,
          colEnd: 15,
          rowStart: 7,
          rowEnd: 14
        },*/
        {
          name: 'Placeholder',
          component: <PlaceholderSquid />,
          colStart: 1,
          colEnd: 5,
          rowStart: 13,
          rowEnd: 20
        }
      ]
    }
  }

  configureSquid(squids) {
    squids.forEach((squid, index) => {
      squid.id = index
      squid.setDangerMode = this.props.setDangerMode
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
