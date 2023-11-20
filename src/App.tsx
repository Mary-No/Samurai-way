import React from 'react';
import './style/App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import {Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Sidebar/>
            <div className="app-wrapper-content">
                <Route path="/profile/:userId"
                       render={()=><ProfileContainer/>}/>
                <Route path="/dialogs"
                       render={()=><DialogsContainer/>}/>
                <Route path="/users"
                       render={()=><UsersContainer/>}/>
            </div>
        </div>
    );
}

export default App;
