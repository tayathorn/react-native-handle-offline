import UserData from '../data/user'

const initialState = {
  user: {
    data: [
      ...UserData
    ],
    error: null,
  }
}

export default initialState
