import usersSaga from './store/users/sagas'

export default function * saga () {
  console.log('load sagas')

  yield usersSaga()
}
