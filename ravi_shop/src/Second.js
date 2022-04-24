import React from 'react'
import { useSelector } from 'react-redux'

export default function Second() {

    const counter = useSelector(state => state.counter)
    const name = useSelector(state => state.name)

    return (
        <div>
            Counter: {counter}
            <br />
            Name: {name}
        </div>
    )
}
