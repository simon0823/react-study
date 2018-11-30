import React, {Component} from 'react';

class Counter extends Component {

    state = {
        number : 0
    };

    handleIncrease = () => {
        // react 에서는 state 를 업데이트 해야할 때 setState()를 쓴다.
        this.setState({
            number : this.state.number + 1
        })
    };

    handleDecrease = () => {
        this.setState({
           number : this.state.number - 1
        })
    };

    render() {
        return (
            <div>
                <h1>Counter</h1>
                <div>Value : {this.state.number}</div>
                <button onClick={this.handleIncrease}>+</button>

                { /* 만약 state 의 number 가 0이라면 더 이상 handleDecrease 를 실행하지 않는다. */ }
                <button onClick={this.state.number === 0 ? this.state.number : this.handleDecrease}>-</button>
            </div>
        )
    }
}

export default Counter;