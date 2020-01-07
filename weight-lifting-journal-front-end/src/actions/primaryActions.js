import axios from 'axios';

const token = localStorage.getItem('token');

export const CREATE_WORKOUT_START = 'CREATE_WORKOUT_START';
export const CREATE_WORKOUT_SUCCESS = 'CREATE_WORKOUT_SUCCESS';
export const CREATE_WORKOUT_FAILURE = 'CREATE_WORKOUT_FAILURE';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const createWorkout = newWorkout => dispatch => {
  console.log('createWorkout firing from primaryActions.js')
  dispatch({ type: CREATE_WORKOUT_START });
  axios
    .post('BACKEND_ENDPOINT_GOES_HERE', newWorkout, {Authorization: token})
    .then(res => {
      dispatch({ type: CREATE_WORKOUT_SUCCESS, payload: newWorkout })
    })
    .catch(error => {
      dispatch({ type: CREATE_WORKOUT_FAILURE, payload: error.response })
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
      console.log(res);
      localStorage.setItem("token", res.data.token);
      dispatch({ LOGIN_SUCCESS, payload: res.data.userID })
    })
    .catch(error => {
      dispatch({ type: LOGIN_FAILURE, payload: error.response })
    });
}