import React from "react";
import "./style/App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Sidebar/>
                <div className="app-wrapper-content">
                    <Route path="/profile" component={Profile}/>
                    <Route path="/dialogs" component={Dialogs}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
