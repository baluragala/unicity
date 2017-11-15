import {GET_PRODUCTS, GET_PRODUCTS_FAILURE, GET_PRODUCTS_SUCCESS} from "./actionTypes";

export function getProducts() {
    return {
        type: GET_PRODUCTS
    }
}

export function getProductsSuccess(products) {
    return {
        type: GET_PRODUCTS_SUCCESS,
        products
    }
}

export function getProductsFailure(error) {
    return {
        type: GET_PRODUCTS_FAILURE,
        error
    }
}
