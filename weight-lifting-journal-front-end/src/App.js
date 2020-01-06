import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

import Login from './components/Forms/Login';
import Register from './components/Forms/Register';
import Dashboard from './components/Common/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
