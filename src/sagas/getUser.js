import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchUser } from '../api'
import {
  getUserSuccess,
  getUserFailed
} from '../actions/getUser'

import { GET_USER_REQUESTED } from '../constants/actionTypes'

export function* getUser() {
  try {
    const response = yield call(fetchUser)
    const { results } = response.data
    yield put(getUserSuccess(results))
  } catch (error) {
    yield put(getUserFailed(error.message))
  }
}

function* watchGetUserData() {
  yield takeLatest(GET_USER_REQUESTED, getUser)
}

export default watchGetUserData