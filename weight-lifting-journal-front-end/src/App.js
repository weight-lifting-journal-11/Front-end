import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

import Login from './components/Forms/Login';
import Register from './components/Forms/Register';
import Dashboard from './components/Common/Dashboard';
import PrivateRoute from './utilities/PrivateRoute';
import JournalEntry from './components/Common/JournalEntry';
import Home from './components/Common/Home';

import { GlobalStyle } from './components/Styles/GlobalStyle';
import { StyledNav} from './components/Styles/StyledNav'


function App() {
  return (
    <>
    <Router>
      <div className="App">
        <StyledNav>
          <div className='nav-container'>
            <p>Logo</p>
            <Link to='/login'>
              <p>Login</p>
            </Link>
            <Link to='/register'>
              <p>Register</p>
            </Link>
            <Link to='/dashboard'>
              <p>Dashboard</p>
            </Link>
            <Link to='/'>
              <p>Home</p>
            </Link>
          </div>
        </StyledNav>
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
    <GlobalStyle/>
    </>
  );
}

export default App;
