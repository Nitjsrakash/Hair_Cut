import { StatusBar } from 'expo-status-bar';

import React, { Component } from 'react';

import {StyleSheet, Text,View,Image,TouchableOpacity,FlatList} from 'react-native';
import MyHeader from './Custom/MyHeader';




class DetailItem extends Component {
    render(){
        const item =this.props.navigation.getParam("itemValue", null)
         console.log("Data:",item)
        return(
          <View >   
             <MyHeader noBack={false} title={"DetaliPage"} isTransparent={false}/>  
              {/* <Text>data.name</Text> */}
          </View>
        );
    }
}


export default  DetailItem;

