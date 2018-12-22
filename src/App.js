import React from 'react';
import logo from './logo.svg';
import './App.css';
import SongSearch from "./SongSearch";
import TokenAccessor from "./TokenAccessor";
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends React.Component {

    render() {
        return (

            <div className="App">
                <Router>
                    <Route
                        path="/"
                        location={this.props.location}
                        component={TokenAccessor}/>
                </Router>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <SongSearch/>
                {/*<TokenAccessor/>*/}
            </div>
        );
    }
}

export default App;
