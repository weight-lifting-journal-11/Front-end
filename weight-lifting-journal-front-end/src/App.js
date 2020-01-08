import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

import Login from './components/Forms/Login';
import Register from './components/Forms/Register';
import Dashboard from './components/Common/Dashboard';
import PrivateRoute from './utilities/PrivateRoute';
import JournalEntry from './components/Common/JournalEntry';
import Home from './components/Common/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="navigation">
          <p>Logo</p>
          <ul className="links">
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/register'>Register</Link>
            </li>
            <li>
              <Link to='/dashboard'>Dashboard</Link>
            </li>
            <li>
              <Link to='/'>Home</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route exact path='/' component={Home} />
          <PrivateRoute exact path='/dashboard' component={Dashboard} />
          <Route path='/dashboard/:id' component={JournalEntry}/>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
