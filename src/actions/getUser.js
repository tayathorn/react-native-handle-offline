import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
} from '../constants/actionTypes'

export const getUserRequested = () => ({
  type: GET_USER_REQUEST,
  meta: {
    retry: true
  }
})

export const getUserSuccess = payload => ({
  type: GET_USER_SUCCESS,
  payload,
})

export const getUserFailed = error => ({
  type: GET_USER_FAILED,
  error,
})

