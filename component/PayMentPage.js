import { StatusBar } from 'expo-status-bar';

import React, { Component } from 'react';
import {connect} from 'react-redux'

import {StyleSheet, Text,View,Image,TouchableOpacity,FlatList} from 'react-native';




class PayMentPage extends Component {
    render(){
         var data = this.props

         console.log("Total Cart Item:",this.props.cartItem)
        return(
          <View style = {{flexDirection:'row'}}>     
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


