import { CREATE_WORKOUT_START, CREATE_WORKOUT_SUCCESS, CREATE_WORKOUT_FAILURE } from '../actions/primaryActions';

export const initialState = {
  workouts: [],
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
      }
    case CREATE_WORKOUT_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
  }
}