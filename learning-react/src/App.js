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
import {connect} from "react-redux";
import {getProducts} from "./actionCreators";

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
                <button onClick={this.props.getProductsFromStore}>Get Products</button>
                {this.props.isLoading && <p>Loading...</p>}
                {this.props.error && <p>Something went wrong, please try again...</p>}
                <ProductList products={this.props.products} cart={[]}/>
                {/*<Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/about" component={About}/>
                    <Route exact path="/products"
                           component={props => <ProductList products={this.props.products} cart={[]}/>}/>
                    <Route path="/products/:pid" component={ProductDetail}/>
                    <Route component={NotFound}/>
                </Switch>*/}
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        products: state.products,
        cart: state.cart,
        isLoading: state.isLoading,
        error: state.error
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getProductsFromStore: () => dispatch(getProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
