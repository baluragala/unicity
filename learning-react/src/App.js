import React, {Component} from 'react';
import './App.css';
import ProductList from "./ProductList";
import Nav from "./Nav";
import AddProduct from "./AddProduct";
import {Route, Switch} from "react-router-dom";
import HomePage from "./HomePage";
import About from "./About";
import NotFound from "./NotFound";
import ProductDetail from "./ProductDetail";

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
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/about" component={About}/>
                    <Route exact path="/products" component={props => <ProductList/>}/>
                    <Route path="/products/:pid" component={ProductDetail}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        );
    }
}

export default App;
