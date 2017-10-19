import {
  FETCH_INFO_REQUEST,
  FETCH_INFO_SUCCESS,
  FETCH_INFO_FAILURE,
  FETCH_EDIT_NAME_REQUEST,
  FETCH_EDIT_NAME_SUCCESS,
  FETCH_EDIT_NAME_FAILURE,
  FETCH_MODIFY_PASSWORD_REQUEST,
  FETCH_MODIFY_PASSWORD_SUCCESS,
  FETCH_MODIFY_PASSWORD_FAILURE,
} from '../actions'

export default(state = {
  isFetching: false,
  data: {}
}, action) => {
  switch (action.type) {
    case FETCH_INFO_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_INFO_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data
      }
    case FETCH_INFO_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }

    case FETCH_EDIT_NAME_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_EDIT_NAME_SUCCESS:
      return {
        ...state,
        isFetching: false,
      }
    case FETCH_EDIT_NAME_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }

    case FETCH_MODIFY_PASSWORD_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_MODIFY_PASSWORD_SUCCESS:
      return {
        ...state,
        isFetching: false,
      }
    case FETCH_MODIFY_PASSWORD_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }

    default:
      return state
  }
}
