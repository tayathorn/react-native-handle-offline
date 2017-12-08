import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchUser } from '../api'
import {
  getUserSuccess,
  getUserFailed
} from '../actions/getUser'

import { GET_USER_REQUESTED } from '../constants/actionTypes'

const testData = [
  {
    gender: "male",
    name: {
      title: "mr",
      first: "valdemar",
      last: "jensen"
    },
    location: {
      street: "4892 svenstrupvej",
      city: "københavn n",
      state: "syddanmark",
      postcode: 73176
    },
    email: "valdemar.jensen@example.com",
    login: {
      username: "crazyduck901",
      password: "tranny",
      salt: "kpV55xCk",
      md5: "022da1b88c31723a02c8dd7739151bff",
      sha1: "87eea7b3cda55cdd93b2c6292a79401a7bfc59b1",
      sha256: "a5b4996f0afda6e9fa8af85e5ab45298fbc7f41a7fbb8050516a72de82d790dd"
    },
    dob: "1991-04-16 09:08:10",
    registered: "2013-06-21 17:11:22",
    phone: "11323086",
    cell: "97512070",
    id: {
      name: "CPR",
      value: "165897-9257"
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/45.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/45.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/45.jpg"
    },
    nat: "DK"
  },
]

export function* getUser() {
  try {
    const response = yield call(fetchUser)
    const { results } = response.data
    // const results = testData
    yield put(getUserSuccess(results))
  } catch (error) {
    yield put(getUserFailed(error.message))
  }
}

function* watchGetUserData() {
  yield takeLatest(GET_USER_REQUESTED, getUser)
}

export default watchGetUserData