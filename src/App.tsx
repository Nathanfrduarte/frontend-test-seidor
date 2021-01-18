import React from 'react'
import Routes from './routes'
import { Provider } from 'react-redux'

import './App.css'
import store from './redux/store'

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

export default App
