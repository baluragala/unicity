import React from 'react';

class ProductDetail extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return [
            <h2>Detail for {this.props.match.params['pid']}</h2>,
            <button onClick={()=> this.props.history.goBack()}>Back</button>,
            <button onClick={()=> this.props.history.go(-2)}>2 step Back</button>,
            <button onClick={()=> this.props.history.push("/home")}>Go Home</button>,
            <button onClick={()=> this.props.history.replace("/home")}>Only Home</button>
        ]

    }
}

export default ProductDetail