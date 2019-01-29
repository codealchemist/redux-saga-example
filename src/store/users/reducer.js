import { LOAD_USERS, LOAD_USERS_SUCCESS, LOAD_USERS_FAIL } from './actionTypes'

const defaultState = {
  list: [],
  loading: false
}

const handlers = {
  [LOAD_USERS]: (state, action) => ({ ...defaultState, loading: true }),
  [LOAD_USERS_SUCCESS]: (state, { payload }) => ({
    list: payload.results,
    loading: false
  }),
  [LOAD_USERS_FAIL]: (state, { payload }) => ({ list: [], loading: false })
}

const reducer = (state = defaultState, action) => {
  if (!(action.type in handlers)) return defaultState
  return handlers[action.type](state, action)
}
export default reducer
