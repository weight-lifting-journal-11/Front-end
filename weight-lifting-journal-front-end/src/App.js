import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

import Login from './components/Forms/Login';
import Dashboard from './components/Common/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
        </ul>
        <Switch>
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
