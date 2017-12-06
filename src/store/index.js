import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { helloSaga } from '../sagas'
import reducers from '../reducers'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(helloSaga)

export default store