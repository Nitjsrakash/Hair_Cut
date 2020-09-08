import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView ,View,Image} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { Provider } from 'react-redux'
import store from './store'
import Constants from 'expo-constants';
import HomePage from './component/HomePage'
import Router from './router/index'
import NavigationService  from './NavigationService/NavigationService'


class App extends React.Component {
  render() {
    return  (
      <Provider store = {store} >
        <Router 
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    )
  }
}


export default App;