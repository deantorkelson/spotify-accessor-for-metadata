import React from 'react';
import App from './App.js';
import {BrowserRouter as Router, Route} from 'react-router-dom'

let access_token = "ERROR: Token not set yet.";

class TokenWrapper extends React.Component {

    render() {
        return (
            <Router>
                <Route
                    path="/access_token/:token"
                    component={Token}/>
            </Router>
        );
    }
}

function Token({match}) {
    /* Parse URL to get access token for making calls */
    let url = match.url.split("/");
    access_token = url[2];
    return (<App token={access_token}/>);

}

export default TokenWrapper;
