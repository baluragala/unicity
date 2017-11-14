import React, {Component} from 'react';
import './App.css';
import ProductList from "./ProductList";
import Nav from "./Nav";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {counters: [10, 500, 1000], message: `Wait for a child message..`}
        this.counterClick = this.counterClick.bind(this);
    }

    counterClick(id) {
        this.setState({message: `Counter ${id} clicked...`})
    }

    render() {
        return (
            <div className="container">
                <Nav/>
                <div className="products">
                    <ProductList/>
                </div>
            </div>
        );
    }
}

export default App;
