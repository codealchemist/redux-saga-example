import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import HomePage from './pages/HomePage'
import UsersListPage from './pages/UsersListPage'
import store from './store'

const App = () => (
  <Provider store={store}>
    <Router>
      <>
        <Route path="/" exact component={HomePage} />
        <Route path="/users" component={UsersListPage} />
      </>
    </Router>
  </Provider>
)

console.log('STATE', store.getState())
export default App
