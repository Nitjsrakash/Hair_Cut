import { StatusBar } from 'expo-status-bar';

import React, { Component } from 'react';
import {connect} from 'react-redux'

import {StyleSheet, Text,View,Image,TouchableOpacity,FlatList} from 'react-native';
import MyHeader from './Custom/MyHeader';




class PayMentPage extends Component {
    render(){
      const item =this.props.navigation.getParam("cartItem", null)
      console.log("Data:",item)
        return(
          <View >   
             <MyHeader noBack={false} title={"Cart Page"} isTransparent={false}/>  
              <Text>PayMent Page</Text>
          </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    //   cartItem: state
    cartItem:state.cart.cart,
    cartTotal: state.cart.total
    }
  }

  export default  connect(mapStateToProps)(PayMentPage);


