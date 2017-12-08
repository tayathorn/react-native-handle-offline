import initialState from '../constants/initialState'
import {
  GET_USER_SUCCESS,
  GET_USER_FAILED,
} from '../constants/actionTypes'

import { offlineActionTypes } from 'react-native-offline'

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

const user = (state = initialState.user, action) => {
  console.warn(action.type)
  switch (action.type) {
    case GET_USER_SUCCESS:
      return { data: [...action.payload, ...state.data], error: null }
    case GET_USER_FAILED:
      return { data: [...state.data], error: action.error }
    case offlineActionTypes.FETCH_OFFLINE_MODE:
      return { data: [...testData,...state.data], error: null }
    default:
      return state
  }
}

export default user