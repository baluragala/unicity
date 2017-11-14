import React from 'react'
import ProductListItem from "./ProductListItem";

class ProductList extends React.Component {

    constructor(props) {
        console.log('constructor');
        super(props);
        this.addToCart = this.addToCart.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
        this.state = {
            products: [
                {
                    id: 1,
                    title: 'orange',
                    price: 200,
                    qty: 20
                },
                {
                    id: 2,
                    title: 'apple',
                    price: 200,
                    qty: 20
                }, {
                    id: 3,
                    title: 'banana',
                    price: 200,
                    qty: 20
                }, {
                    id: 4,
                    title: 'grapes',
                    price: 200,
                    qty: 20
                }, {
                    id: 5,
                    title: 'peaches',
                    price: 200,
                    qty: 20
                }],
            cart: []
        }
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount',arguments);
    }

    componentWillReceiveProps() {
        console.log('componentWillReceiveProps', arguments);
    }

    shouldComponentUpdate(){
        console.log('shouldComponentUpdate', arguments);
        return true;
    }

    componentWillUpdate(){
        console.log('componentWillUpdate', arguments);
    }

    componentDidUpdate(){
        console.log('componentDidUpdate', arguments);
    }

    addToCart(id) {
        let {cart} = this.state;
        if (!cart.find(n => n === id)) {
            cart.push(id)
        }
        this.setState({cart})
    }

    removeFromCart(id) {
        let {cart} = this.state;
        if (cart.find(n => n === id)) {
            delete cart[cart.findIndex(n => n === id)]
        }
        this.setState({cart})
    }

    render() {
        console.log('render');
        const {products, cart} = this.state;
        return (
            <div>
                <h3>Product List:[{cart.join(',')}]</h3>
                {products.map(p => <ProductListItem key={p.id}
                                                    product={p}
                                                    onButtonClick={cart.find(n => n === p.id) ? this.removeFromCart : this.addToCart}
                                                    buttonLabel={cart.find(n => n === p.id) ? 'REMOVE FROM CART' : 'ADD TO CART'}
                />)}
            </div>
        )
    }
}

export default ProductList