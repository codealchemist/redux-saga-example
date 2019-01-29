import { call, put, takeEvery } from 'redux-saga/effects'
import { LOAD_USERS } from './actionTypes'
import { loadUsersSuccess, loadUsersFail } from './actions'
import { loadUsers as loadUsersApi } from '../../api'

export function * loadUsers () {
  try {
    console.log('load users...')
    const users = yield call(loadUsersApi)
    console.log('USERS', users)
    yield put(loadUsersSuccess(users))
  } catch (e) {
    yield put(loadUsersFail(e))
  }
}

export default function * usersSaga () {
  console.log('fetchUsers saga')
  yield takeEvery(LOAD_USERS, loadUsers)
}
