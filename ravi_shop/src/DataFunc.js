import React from 'react'

export default function DataFunc(props) {

    const [num, setNum] = React.useState(0); // state hook
    const [name, setName] = React.useState("Ravi"); // state hook

    // component did mount
    React.useEffect(() => {
        // console.log("DataFunc componentDidMount")
        // send req to backend
        // get req
        // set state

        console.log(props)

        // component will unmount
        return () => {
            // console.log("DataFunc componentWillUnmount")
        }
    }, []);

    // component did update
    React.useEffect(() => {
        // console.log("DataFunc componentDidUpdate for Num")
    }, [num]);

    React.useEffect(() => {
        // console.log("DataFunc componentDidUpdate for name")
    }, [name]);

    return (
        <>
            <div>Data: {props.num}</div>
            <button onClick={props.addNum}>Add</button>
            <button onClick={props.minusNum}>Minus</button>
            <button onClick={() => {
                props.handleName("Ravi Panasuriya" + props.num)
            }}>Name</button>
        </>
    )
}
