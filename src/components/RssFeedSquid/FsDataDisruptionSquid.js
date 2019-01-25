import React from 'react'

import styles from './FsDataDisruptionSquid.module.css'

export function FsDataDisruptionSquid(props) {
    return (
        <div className={styles.fsdata}>
            <div className={styles.header}>FSdata driftstörningar</div>
            <div className={styles.disruptions}>
                <div>Pågående</div>
                { props.activeDisruptions.map(row => <li key={row.id}><span>{row.title}</span></li>) }
            </div>
            <div className={styles.disruptions}>
                <div>Avslutade</div>
                { props.earlierDisruptions.map(row => <li key={row.id}><span>{row.title}</span></li>) }
            </div>
        </div>
    )
}