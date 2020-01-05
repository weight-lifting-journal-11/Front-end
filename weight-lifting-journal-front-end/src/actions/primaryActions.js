import axios from 'axios';

const token = localStorage.getItem('token');

export const CREATE_WORKOUT_START = 'CREATE_WORKOUT_START';
export const CREATE_WORKOUT_SUCCESS = 'CREATE_WORKOUT_SUCCESS';
export const CREATE_WORKOUT_FAILURE = 'CREATE_WORKOUT_FAILURE';

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