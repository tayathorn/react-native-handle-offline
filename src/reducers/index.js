import {combineReducers} from 'redux'
import { reducer as network } from 'react-native-offline'

import user from './user'

export default combineReducers({
  user,
  network,
})