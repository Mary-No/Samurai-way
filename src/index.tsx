import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import store from './redux/redux-store'
import {stateDataType} from './redux/store';
import StoreContext from "./StoreContext";


let rerenderEntireTree = (state: stateDataType) => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App />
            </StoreContext.Provider>
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state)
})

