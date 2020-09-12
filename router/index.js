import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator}  from '@react-navigation/stack'
// import { createStackNavigator } from 'react-navigation-stack';
// import HomePage from '../component/HomePage';
// import DetailPage from '../component/DetailItem';
// import PayMentPage from '../component/PayMentPage';
import   NavigationService  from '../NavigationService/NavigationService'
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import RootStack from './RootStack'
import AuthenticationStack from './AuthenticationStack'




const Stack = createStackNavigator();

// const Router = (props) => {
  class Router extends React.Component{ 

  render(){
    const SwitchNavigator = createAppContainer(
      createSwitchNavigator({
        RootStack: RootStack(),
        AuthenticationStack: AuthenticationStack(),
      }, 
      {
        initialRouteName: true ? "RootStack" : "AuthenticationStack"
      })
    );
    return (
      // <NavigationContainer>
      //   <Stack.Navigator initialRouteName="Home">
      //     <Stack.Screen name="Home" component={HomePage} 
      //         options={{
      //           headerShown: false,
      //       }}
      //     />
      //     <Stack.Screen name="Detail" component={DetailPage} />
      //     <Stack.Screen name="PayMentPage" component={PayMentPage} />

      //   </Stack.Navigator>
      // </NavigationContainer>
      <SwitchNavigator
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }} 
      />
    );
  }
   
  }
export default Router;