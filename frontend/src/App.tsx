import React from 'react';
import { HashRouter as Switch, Route } from 'react-router-dom';

import Navbar from 'src/components/Navbar/Navbar';
import { ROUTES } from 'src/constants';
import Homepage from 'src/pages/Homepage/Homepage'
import PlaylistCompare from 'src/pages/PlaylistCompare/PlaylistCompare'
import SearchContainer from 'src/pages/Search/SearchContainer'
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Switch>
        <Route path={ROUTES.SEARCH} component={SearchContainer}/>
        <Route path={ROUTES.COMPARE} component={PlaylistCompare}/>
        <Route exact path={ROUTES.HOME} component={Homepage}/>
      </Switch>
    </div>
  );
}

export default App;
