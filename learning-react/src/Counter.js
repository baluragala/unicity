import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {counterValue: this.props.startWith};
        setInterval(() => {
            this.setState({counterValue: this.state.counterValue + 1});

        }, 1000);

        this.onCounterClick = this.onCounterClick.bind(this);
    }

    onCounterClick() {
        console.log('clicked');
        this.props.onCounterClick(this.props.cid);
    }

    render() {
        //console.log(this.state);
        return <h1 onClick={this.onCounterClick}>{this.state.counterValue}</h1>
    }
}

export default Counter
