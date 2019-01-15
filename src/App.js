import React from 'react';
import logo from './logo.svg';
import './App.css';
import SongSearch from "./SongSearch";

let access_token = "NOT SET QUITE YET";

class App extends React.Component {

    constructor(props) {
        super(props);
        access_token = props.token;
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <SongSearch token={access_token}/>
            </div>
        );
    }
}


export default App;
