import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  const [isFetching, setIsFetching] = useState(false);

  const handleChanges = event => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
    console.log("new credentials from login component", credentials);
  };

  const login = event => {
    event.preventDefault();
    axios
      .post(
        "https://weight-lifting-journal-11.herokuapp.com/api/auth/login",
        credentials
      )
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        setCredentials({ username: "", password: "" });
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={login}>
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

export default Login;
