import React from 'react';
import './style/App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {StoreAppType} from "./redux/redux-store";

type AppPropsType = {
    store: StoreAppType
}
function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Sidebar/>
                <div className="app-wrapper-content">
                    <Route path="/profile"
                           render={() => <Profile store={props.store}/>}/>
                    <Route path="/dialogs"
                           render={() => <DialogsContainer store={props.store} />}/>


                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
