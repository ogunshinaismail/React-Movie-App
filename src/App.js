import React from 'react';
import './App.css';
// import Filter from './Filter';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Moviedetails from './Moviedetails';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/movie/:id">
            <Moviedetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
