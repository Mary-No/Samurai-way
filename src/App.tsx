import React from 'react';
import './style/App.css';
import Sidebar from './components/Sidebar/Sidebar';
import {Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";

function App() {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Sidebar/>
            <div className="app-wrapper-content">
                <Route path="/profile"
                       render={()=><ProfileContainer/>}/>
                <Route path="/dialogs"
                       render={()=><DialogsContainer/>}/>
                <Route path="/users"
                       render={()=><UsersContainer/>}/>
                <Route path="/login"
                       render={()=><LoginPage/>}/>
            </div>
        </div>
    );
}

export default App;
