import { CREATE_WORKOUT_START, CREATE_WORKOUT_SUCCESS, CREATE_WORKOUT_FAILURE, LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/primaryActions';

export const initialState = {
  workouts: [],
  userID: 0,
  loginLoading: false,
  isFetching: false,
  isPosting: false,
  error: '',
}

export const reducer = (state = initialState, action) => {
  console.log('payload from before the switch cases', action.payload)
  switch(action.type) {
    case CREATE_WORKOUT_START:
      return {
        ...state,
        isFetching: true,
      }
    case CREATE_WORKOUT_SUCCESS:
      return {
        ...state,
        workouts: action.payload,
        isFetching: false,
      }
    case CREATE_WORKOUT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      }
    case LOGIN_START:
      return {
        ...state,
        loginLoading: true,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        userID: action.payload,
        loginLoading: false,
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        loginLoading: false,
      }
  }
}