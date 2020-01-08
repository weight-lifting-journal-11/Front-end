import { 
  ADD_JOURNAL_START, 
  ADD_JOURNAL_SUCCESS, 
  ADD_JOURNAL_FAILURE, 
  LOGIN_START, 
  LOGIN_SUCCESS, 
  LOGIN_FAILURE, 
  REGISTER_START, 
  REGISTER_SUCCESS, 
  REGISTER_FAILURE, 
  DELETE_JOURNAL_START, 
  DELETE_JOURNAL_SUCCESS, 
  DELETE_JOURNAL_FAILURE, 
  FETCH_JOURNAL_SUCCESS,
  EDIT_JOURNAL_START,
  EDIT_JOURNAL_SUCCESS,
  EDIT_JOURNAL_FAILURE
} from '../actions/primaryActions';

export const initialState = {
  workouts: [],
  journals: [],
  userID: 0,
  loginLoading: false,
  registerLoading: false,
  addJournalLoading: false,
  isDeleting: false,
  isEditing: false,
  error: '',
}

export const reducer = (state = initialState, action) => {
  console.log('payload from before the switch cases', action.payload)
  switch(action.type) {
    case ADD_JOURNAL_START:
      return {
        ...state,
        addJournalLoading: true,
      }
    case ADD_JOURNAL_SUCCESS:
      return {
        ...state,
        journals: action.payload,
        addJournalLoading: false,
      }
    case ADD_JOURNAL_FAILURE:
      return {
        ...state,
        error: action.payload,
        addJournalLoading: false,
      }
    case DELETE_JOURNAL_START:
      return {
        ...state,
        isDeleting: true,
      }
    case DELETE_JOURNAL_SUCCESS:
      const filteredJournals = state.journals.filter(journal => journal.id !== action.payload)
      return {
        ...state,
        journals: filteredJournals,
        isDeleting: false,
      }
    case DELETE_JOURNAL_FAILURE:
      return {
        ...state,
        error: action.payload,
        isDeleting: false
      }
    case EDIT_JOURNAL_START:
      return {
        ...state,
        isEditing: true,
      }
    case EDIT_JOURNAL_SUCCESS:
      const updatedJournals = state.journals.map(journal => (journal.id === action.payload.id ? action.payload : journal)) 
      return {
        ...state,
        journals: updatedJournals,
        isEditing: false,
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
    case REGISTER_START:
      return {
        ...state,
        registerLoading: true,
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        userID: action.payload.id,
        registerLoading: false,
      }
    case REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload,
        registerLoading: false,
      }
    case FETCH_JOURNAL_SUCCESS:
      return {
        ...state,
        journals: action.payload
      }
    default:
      return state;
  }
}