import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createStackNavigator } from '@react-navigation/native';
import {StyleSheet, Text,View,Image,TouchableOpacity,FlatList} from 'react-native';
import HomePage from '../component/HomePage';
import DetailItem from '../component/DetailItem';
import PayMentPage from '../component/PayMentPage';
import NavigationService  from './../NavigationService/NavigationService'


const Stack = createStackNavigator();

// const AuthStack = createStackNavigator({ 
//   HomePage: HomePage,
//   DetailItem:DetailItem,
// });


// const AppContainer = createAppContainer(createSwitchNavigator(
//   { 
//      App: TabNavigation,
//      Auth: AuthStack,
//   },
//   {
//     initialRouteName: userToken ?  'App' : 'Auth',
//   }
// ));
const Router = (props) => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomePage} 
              options={{
                headerShown: false,
            }}
          />
          <Stack.Screen name="Detail" component={DetailItem} />
          <Stack.Screen name="PayMentPage" component={PayMentPage} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
export default Router;