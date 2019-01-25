import React from 'react'

import styles from './BibleWordOfTodaySquid.module.css'

export function BibleWordOfTodaySquid(props) {
    return (
        <div className={styles.bibleWordOfToday}>
            <div>
                <h4>{props.bibleWordOfToday ? props.bibleWordOfToday.title : ""}</h4>
                <p dangerouslySetInnerHTML={{ __html: props.bibleWordOfToday ? props.bibleWordOfToday.description : ""}}></p>
            </div>
        </div>
    )
}