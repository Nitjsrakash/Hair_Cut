import { StatusBar } from 'expo-status-bar';

import React, { Component } from 'react';

import {StyleSheet, Text,View,Image,TouchableOpacity,FlatList} from 'react-native';




class DetailItem extends Component {
    render(){
         var data = this.props.route.params.itemData

         console.log(data)
        return(
          <View style = {{flexDirection:'row'}}>     
              <Text>{data.name}</Text>
          </View>
        );
    }
}


export default  DetailItem;

