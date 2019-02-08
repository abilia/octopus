import React from 'react'
import styles from './Squid.module.css'

export function Squid(props) {
  const { squidData, dangerMode } = props

  return (
    <article key={squidData.id} className={styles.squid} style={getStyle(squidData)}>
      <header>
        {squidData.name}
        {dangerMode ? <span className={styles.danger} role="img" aria-label="warning">🛑</span> : null}
      </header>
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
