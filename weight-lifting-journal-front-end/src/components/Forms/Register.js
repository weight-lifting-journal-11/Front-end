import React, { useState } from "react";
import axios from 'axios'

const Register = () => {
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    email: ""
  });
  const [isFetching, setIsFetching] = useState(false);

  const handleChanges = event => {
    setNewUser({ ...newUser, [event.target.name]: event.target.value });
    console.log("new credentials from login component", newUser);
  };

  const createNewUser = event => {
    event.preventDefault();
    axios
      .post(
        "https://weight-lifting-journal-11.herokuapp.com/api/auth/register",
        newUser
      )
      .then(res => {
        console.log(res);
        setNewUser({ username: "", password: "", email: "" });
      })
      .catch(err => {
        console.log(err);
      });
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

export default Register;
