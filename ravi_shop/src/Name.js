import React from 'react'
import { useDispatch } from 'react-redux';

export default function Name() {

    const [name, setName] = React.useState('');
    const dispatch = useDispatch();

    return (
        <div>
            <br />
            <input onChange={e => setName(e.target.value)}/>
            <button onClick={
                () => dispatch({ type: 'SET_NAME', payload: name })
            }>Update Name</button>
        </div>
    )
}
