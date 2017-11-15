import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore,applyMiddleware} from "redux";
import reducer from './reducers';
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import {getProductsWatcher} from "./sagas";
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer,composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(getProductsWatcher);


ReactDOM.render(<Provider store={store}>
        <App/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
