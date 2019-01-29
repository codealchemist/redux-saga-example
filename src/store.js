import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
// import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()
const middleware = composeWithDevTools(applyMiddleware(sagaMiddleware))
// const middleware = composeWithDevTools(applyMiddleware(thunk))
const store = createStore(reducers, middleware)
sagaMiddleware.run(sagas)

export default store
