import React from 'react';
import PropTypes from 'prop-types'

function ProductListItem(props) {
    const {product, onButtonClick, buttonLabel} = props;
    const {title, price, qty, id} = product;
    return (<div style={styles.wrapper}>
        <h3>{title}</h3>
        <h2>{price}</h2>
        <h4>{qty}</h4>
        <button onClick={() => onButtonClick(id)}>{buttonLabel}</button>
    </div>)
}

ProductListItem.propTypes = {
    buttonLabel: PropTypes.string.isRequired,
    onButtonClick: PropTypes.func.isRequired,
    product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        qty: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired
    })
};

const styles = {
    wrapper: {
        margin: '2px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'purple'
    }
};
export default ProductListItem