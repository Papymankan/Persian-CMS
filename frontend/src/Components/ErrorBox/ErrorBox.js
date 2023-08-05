import React from 'react'
import './ErrorBox.css'

export default function ErrorBox({message}) {
    return (
        <div className="ErrorBox">
            <h2>{message}</h2>
        </div>
    )
}
