import React, { Component } from 'react';

class OldLifecycle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

 /*   componentDidMount() {
        document.title = `you clicked ${this.state.count} times`;
    }

    componentDidUpdate() {
        document.title = `you clicked ${this.state.count} times`;
    } */

    increase = () => {
        this.setState({ counter: this.state.counter + 1});
    }

    render() {
        return (
            <div className="OldLifecycle">
                <h1>I am old Lifecycle... {this.state.count}</h1>
                <button onClick={this.increase}>click me</button>
            </div>
        );
    }
}

export default OldLifecycle;