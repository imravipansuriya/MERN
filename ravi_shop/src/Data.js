import React, { Component } from 'react'

export default class Data extends Component {

    constructor(props) {
        console.log("Constructor")
        super(props);
        this.state = {
            num: 0,
            name: "Ravi"
        }
    }

    //lifecycle methods
    componentDidMount() {
        // will be executed after the component has finished loading
        console.log("ComponentDidMount")
        // send req to backend
        // get req
        // set state
    }

    componentDidUpdate() {
        // will be executed after the component has finished updating
        console.log("ComponentDidUpdate")
    }

    componentWillUnmount() {
        console.log("ComponentWillUnmount")
    }

    handleClick = () => {
        this.setState( { num: this.state.num + 1 } );
    }

    handleMinus = () => {
        this.setState( { num: this.state.num - 1 } );
    }

    render() {
        console.log("Render")
        return (
            <React.Fragment>
                <div>Data: {this.state.num} : {this.state.name}</div>
                <button onClick={this.handleClick}>Add</button>
                <button onClick={this.handleMinus}>Minus</button>
            </React.Fragment>
        )
    }
}
