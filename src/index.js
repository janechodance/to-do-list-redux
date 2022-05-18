import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit'

import App from './components/App'
import reducers from './reducers'

const store = configureStore({reducer: reducers})
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#root')
);