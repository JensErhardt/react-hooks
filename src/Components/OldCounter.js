import React, { Component } from 'react';

class OldCounter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    increase = () => {
        this.setState({ count: this.state.count + 1 })
    }

    decrease = () => {
        this.setState({ count: this.state.count - 1 })
    }

    render() {
        return (
            <div className="OldCounter">
                <h1>I am old counter..not cool {this.state.count}</h1>
                <button onClick={this.increase}>+</button>
                <button onClick={this.decrease}>-</button>
            </div>
        );
    }
}

export default OldCounter;
