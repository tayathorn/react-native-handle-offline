import initialState from '../constants/initialState'
import {
  GET_USER_SUCCESS,
  GET_USER_FAILED,
} from '../constants/actionTypes'

const user = (state = initialState.user, action) => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return { data: action.payload, error: null }
    case GET_USER_FAILED:
      return { data: [], error: action.error }
    default:
      return state
  }
}

export default user