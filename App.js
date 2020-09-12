import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux'
import store from './store'
import Constants from 'expo-constants';

import Router from './router/index'

class App extends React.Component {

  render() {
    return  (
      <Provider store = {store} >
        <Router/>
      </Provider>
    )
  }
}


export default App;