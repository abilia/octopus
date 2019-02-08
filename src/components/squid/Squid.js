import React from 'react'
import styles from './Squid.module.css'

export function Squid(props) {
  const { squidData } = props

  return (
    <article key={squidData.id} className={styles.squid} style={getStyle(squidData)}>
      <header>{squidData.name}</header>
      <div>
        {squidData.component}
      </div>
    </article>
  )
}

function getStyle(squidData) {
  return {
    gridColumnStart: squidData.colStart,
    gridColumnEnd: squidData.colEnd,
    gridRowStart: squidData.rowStart,
    gridRowEnd: squidData.rowEnd
  }
}
