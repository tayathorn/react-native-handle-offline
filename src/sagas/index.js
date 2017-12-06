import { all } from 'redux-saga/effects'
import getUser from './getUser'


export default function* rootSaga() {
  yield all([
    getUser(),
  ])
}