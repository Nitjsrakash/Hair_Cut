import { StatusBar } from 'expo-status-bar';

import React, { Component } from 'react';

import {StyleSheet, Text,View,Image,TouchableOpacity,FlatList} from 'react-native';




class Login extends Component {
    render(){
        // const item =this.props.navigation.getParam("itemValue", null)
        //  console.log("Data:",item)
        return(
          <View style = {{flexDirection:'row'}}>     
              <Text>LoginPage</Text>
          </View>
        );
    }
}


export default  Login;

