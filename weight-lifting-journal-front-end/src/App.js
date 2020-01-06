import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

import Login from './components/Forms/Login';
import Register from './components/Forms/Register';
import Dashboard from './components/Common/Dashboard';
import PrivateRoute from './utilities/PrivateRoute';
import JournalEntry from './components/Common/JournalEntry';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/register'>Register</Link>
          </li>
          <li>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
        </ul>
        <Switch>
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
