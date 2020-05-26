import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from './Search/Search'
import Homepage from './Homepage/Homepage'
import './App.css';

function App() {
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/search' component={Search}/>
          <Route path='/' component={Homepage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
