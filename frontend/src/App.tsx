import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from './pages/Search/Search'
import Homepage from './pages/Homepage/Homepage'
import PlaylistCompare from './pages/PlaylistCompare/PlaylistCompare'
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar/>
        <Switch>
          <Route path='/search' component={Search}/>
          <Route path='/playlist-compare' component={PlaylistCompare}/>
          <Route path='/' component={Homepage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
