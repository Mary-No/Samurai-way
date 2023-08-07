import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import store from './redux/redux-store'
import {stateDataType} from './redux/store';
import {Provider} from "react-redux";



let rerenderEntireTree = (state: stateDataType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App store={store}/>
            </Provider>
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state)
})

