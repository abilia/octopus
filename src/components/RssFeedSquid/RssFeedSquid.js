import React from 'react'

export function RssFeedSquid(props) {
    return (
        <div>
            Squiiiiiiiid

            { props.feedList.map(row => <li key={row}><span>{row}</span></li>) }
        </div>
    )
}