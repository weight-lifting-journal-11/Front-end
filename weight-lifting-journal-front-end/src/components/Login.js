import React, { useState } from "react";
import { connect } from 'react-redux';
import { login } from '../actions/primaryActions';

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChanges = event => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
    console.log("new credentials from login component", credentials);
  };

  const userLogin = event => {
    event.preventDefault();
    props.login(credentials);
    setCredentials({ username: "", password: "" });
  };

  return (
    <form onSubmit={userLogin}>
      <input
        type="username"
        name="username"
        placeholder="username"
        value={credentials.username}
        onChange={handleChanges}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={credentials.password}
        onChange={handleChanges}
      />
      <button>Log in</button>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    userID: state.userID,
    loginLoading: state.loginLoading,
  }
}

export default connect (mapStateToProps, {login})(Login);
