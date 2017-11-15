import {call, put, takeLatest, takeEvery, throttle, take} from "redux-saga/effects";
import {getProductsFailure, getProductsSuccess} from "./actionCreators";
import {GET_PRODUCTS} from "./actionTypes";

;

function* getProducts() {
    console.log('getProducts');
    let products;
    try {
        products = yield call(() => fetch('http://localhost:4000/products').then(r => r.json()));
        yield put(getProductsSuccess(products))
    } catch (error) {
        yield put(getProductsFailure(error))
    }

}

export function* getProductsWatcher() {
    console.log('getProductsWatcher');
    yield throttle(3000, GET_PRODUCTS, getProducts)
}


