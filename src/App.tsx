import React from 'react';
import './style/App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {storeType} from './redux/store';

type AppPropsType = {
    store: storeType
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Sidebar/>
                <div className="app-wrapper-content">
                    <Route path="/profile"
                           render={() => <Profile store={props.store}
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
