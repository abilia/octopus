import React from 'react'

export function FsDataDisruptionSquid(props) {
    return (
        <div>
            <div className="title">FSdata driftstörningar</div>
            <div className="current">
                <div>Pågående</div>
                { props.activeDisruptions.map(row => <li key={row}><span>{row}</span></li>) }
            </div>
            <div className="earlier">
                <div>Avslutade</div>
                { props.earlierDisruptions.map(row => <li key={row}><span>{row}</span></li>) }
            </div>
        </div>
    )
}