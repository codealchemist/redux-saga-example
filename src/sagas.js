import { put, takeLatest, all } from 'redux-saga/effects'
import usersSaga from './store/users/sagas'
import { LOAD_USERS } from './store/users/actionTypes'

export default function * saga () {
  console.log('load sagas')

  yield usersSaga()
}
