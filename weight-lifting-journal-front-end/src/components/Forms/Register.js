import React, { useState } from "react";
import { connect } from 'react-redux';
import { register } from '../../actions/primaryActions'

const Register = props => {
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    email: ""
  });

  const handleChanges = event => {
    setNewUser({ ...newUser, [event.target.name]: event.target.value });
    console.log("new credentials from login component", newUser);
  };

  const createNewUser = event => {
    event.preventDefault();
    props.register(newUser)
    setNewUser({ username: "", password: "", email: "" });
  };

  return (
    <form onSubmit={createNewUser}>
      <input
        type="username"
        name="username"
        placeholder="username"
        value={newUser.username}
        onChange={handleChanges}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={newUser.password}
        onChange={handleChanges}
      />
      <input
        type="email"
        name="email"
        placeholder="email"
        value={newUser.email}
        onChange={handleChanges}
      />
      <button>Create your profile</button>
    </form>
  );
};

const mapStateToProps = state => {
    console.log('ppooopp', state);
    return {
      registerLoading: state.registerLoading,
    }
  }

export default connect (mapStateToProps, {register})(Register);
