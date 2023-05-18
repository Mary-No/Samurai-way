import React from 'react';
import './style/App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {actionType, stateDataType} from './redux/state';

type AppPropsType = {
    state: stateDataType
    dispatch: (action: actionType) => void

}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Sidebar/>
                <div className="app-wrapper-content">
                    <Route path="/profile"
                           render={() => <Profile profilePageState={props.state.profilePage}
                                                  dispatch={props.dispatch}
                           />}/>
                    <Route path="/dialogs"
                           render={() => <Dialogs dialogsPageState={props.state.dialogsPage}
                                                  dispatch={props.dispatch}

                           />}/>


                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
