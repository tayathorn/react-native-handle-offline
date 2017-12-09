import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createNetworkMiddleware } from 'react-native-offline'

import rootSaga from '../sagas'
import reducers from '../reducers'

const sagaMiddleware = createSagaMiddleware()
const networkMiddleware = createNetworkMiddleware({
  actionTypes: ['GET_USER_REQUEST']
})

const store = createStore(
  reducers,
  applyMiddleware(networkMiddleware, sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store