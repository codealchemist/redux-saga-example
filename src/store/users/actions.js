import { LOAD_USERS, LOAD_USERS_SUCCESS, LOAD_USERS_FAIL } from './actionTypes'
// import { loadUsers as loadUsersApi } from '../../api'

export const loadUsers = () => ({
  type: LOAD_USERS
})

// redux-thunk example
// export const loadUsers = () => dispatch => {
//   dispatch(loadingUsers())
//   loadUsersApi().then(response => {
//     console.log('users response', response)
//     dispatch(loadUsersSuccess(response.results))
//   })
// }

export const loadUsersSuccess = payload => ({
  type: LOAD_USERS_SUCCESS,
  payload
})
export const loadUsersFail = payload => ({
  type: LOAD_USERS_FAIL,
  payload
})
export const loadingUsers = () => ({
  type: LOAD_USERS
})
