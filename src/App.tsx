import React from 'react';
import './style/App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Sidebar/>
                <div className="app-wrapper-content">
                    <Route path="/profile"
                           render={() => <Profile />}/>
                    <Route path="/dialogs"
                           render={() => <DialogsContainer/>}/>


                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
