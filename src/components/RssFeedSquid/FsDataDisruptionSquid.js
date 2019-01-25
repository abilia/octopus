import React from 'react'

import styles from './FsDataDisruptionSquid.module.css'

export function FsDataDisruptionSquid(props) {
    const disruptionList = (disruptions) => {
        return disruptions.map(dispruption =>
            <li key={dispruption.id}>
                <span className={styles.date}>{dispruption.date}</span>
                <span className={styles.title}>
                    <a href={dispruption.link} target="_blank" rel="noopener noreferrer">{dispruption.title}</a>
                </span>
            </li>
        )
    };

    return (
        <div className={styles.fsdata}>
            <h3>FSdata driftstörningar</h3>
            { props.activeDisruptions.length > 0 &&
            <div className={[styles.disruptions, styles.active].join(' ')}>
                <h4>Pågående</h4>
                <ul>
                { disruptionList(props.activeDisruptions) }
                </ul>
            </div>
            }
            { props.earlierDisruptions.length > 0 &&
                <div className={styles.disruptions}>
                    <h4>Avslutade</h4>
                    <ul>
                        {disruptionList(props.earlierDisruptions)}
                    </ul>
                </div>
            }
        </div>
    )
}