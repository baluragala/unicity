import {GET_PRODUCTS, GET_PRODUCTS_FAILURE, GET_PRODUCTS_SUCCESS} from "./actionTypes";

export default (prevState = {products: [{title: 'Matcha', price: 2000, qty: 100}], cart: []}, action) => {
    console.log(action);
    switch (action.type) {
        case GET_PRODUCTS:
            return Object.assign({}, prevState, {isLoading: true});
            break;
        case GET_PRODUCTS_SUCCESS:
            return Object.assign({}, prevState, {isLoading: false,products:action.products});
            break;
        case GET_PRODUCTS_FAILURE:
            return Object.assign({}, prevState, {isLoading: false,error:action.error});
            break;
        default:
            return prevState;

    }
}