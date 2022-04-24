import React from 'react'
import { useDispatch } from 'react-redux'
import Name from './Name';

export default function Third() {

    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={
                () => dispatch({ type: 'INCREMENT' })
            } >INCREMENT</button>
            <button onClick={
                () => dispatch({ type: 'DECREMENT' })
            }>DECREMENT</button>

            <br />
            <br />

            <button onClick={
                () => dispatch({ type: 'ADDBY5', payload: 5 })
            } >INCREMENT by 5</button>
            <button onClick={
                () => dispatch({ type: 'MINUSBY5', payload: 5 })
            }>DECREMENT by 5</button>
            <Name />
        </div>
    )
}
