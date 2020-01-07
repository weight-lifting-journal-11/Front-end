import axios from 'axios';

const token = localStorage.getItem('token');

export const ADD_JOURNAL_START = 'ADD_JOURNAL_START';
export const ADD_JOURNAL_SUCCESS = 'ADD_JOURNAL_SUCCESS';
export const ADD_JOURNAL_FAILURE = 'ADD_JOURNAL_FAILURE';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const addJournal = (journal) => dispatch => {
  console.log('createNewJournal firing from primaryActions.js')
  dispatch({ type: ADD_JOURNAL_START });
  axios
    .post(`https://weight-lifting-journal-11.herokuapp.com/api/journals`, journal, {authorization: token})
    .then(res => {
      dispatch({ type: ADD_JOURNAL_SUCCESS, payload: res.data })
    })
    .catch(error => {
      dispatch({ type: ADD_JOURNAL_FAILURE, payload: error.response })
    })
}

export const login = credentials => dispatch => {
  console.log('login firing from primaryActions')
  dispatch({ type: LOGIN_START });
  axios
    .post(
      "https://weight-lifting-journal-11.herokuapp.com/api/auth/login",
      credentials
    )
    .then(res => {
      console.log('login firing from primaryActions', res, res.data.id);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userID", res.data.id);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.id })
    })
    .catch(error => {
      dispatch({ type: LOGIN_FAILURE, payload: error.response })
    });
}

export const register = newUser => dispatch => {
  console.log('register firing from primaryActions')
  dispatch({ type: REGISTER_START });
  axios
    .post(
      "https://weight-lifting-journal-11.herokuapp.com/api/auth/register",
      newUser
    )
    .then(res => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userID", res.data.message.id);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data.message })
    })
    .catch(error => {
      dispatch({ type: REGISTER_FAILURE, payload: error.response })
    });
}