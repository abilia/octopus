import React from 'react'

import styles from './AdventOfCodeSquid.module.css'

export function AdventOfCodeSquid(props) {
  console.log(props.leaderboard.members)

  /*const leaderboard = props.leaderboard.members.map((member) => (
    <div>
    </div>
  ));*/

  return (
    <div className={styles.aoc}>

    </div>
  )
}