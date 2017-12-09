import initialState from '../constants/initialState'
import {
  GET_USER_SUCCESS,
  GET_USER_FAILED,
} from '../constants/actionTypes'

import { offlineActionTypes } from 'react-native-offline'

const user = (state = initialState.user, action) => {
  console.warn(action.type)
  switch (action.type) {
    case GET_USER_SUCCESS:
      return { data: [...action.payload, ...state.data], error: null }
    case GET_USER_FAILED:
      return { data: [...state.data], error: action.error }
    default:
      return state
  }
}

export default user