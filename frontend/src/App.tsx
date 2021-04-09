import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from 'src/components/Navbar/Navbar';
import Homepage from 'src/pages/Homepage/Homepage'
import PlaylistCompare from 'src/pages/PlaylistCompare/PlaylistCompare'
import SearchContainer from 'src/pages/Search/SearchContainer'
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar/>
        <Switch>
          <Route path='/search' component={SearchContainer}/>
          <Route path='/playlist-compare' component={PlaylistCompare}/>
          <Route path='/' component={Homepage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
