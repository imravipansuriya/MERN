import React from 'react'
import Third from './Third'

export default function First({ setCounter }) {
    return (
        <div>
            <h1>First</h1>
            <Third setCounter={setCounter} />
        </div>
    )
}
