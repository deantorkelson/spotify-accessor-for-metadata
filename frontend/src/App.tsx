import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from './pages/Search/Search'
import Homepage from './pages/Homepage/Homepage'
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar/>
        <Switch>
          <Route path='/search' component={Search}/>
          {/* <Route path='/playlist-compare' component={PlaylistCompare}/> */}
          <Route path='/' component={Homepage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
