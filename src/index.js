import './main.css'
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {browseHistory, Router, Route} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import reducers from 'reducers'
import {Provider} from 'react-redux'
import Layout from 'containers/layout'
import Phones from 'containers/phones'

const store=createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk)
))
const history=syncHistoryWithStore(browseHistory, store)
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={Layout}>
      <Route path='/' component={Phones} />
      </Route>
    </Router>
  </Provider>,
document.getElementById('root')
)
