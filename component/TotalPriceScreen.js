import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {Dimensions, StyleSheet, Text ,View,Image} from 'react-native';
import renderIf from './renderIf'
import {connect} from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler';
var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

class TotalPriceScreen extends Component {
    render(){
        const jsonObjet = JSON.stringify(this.props.cartItem)
        const selectedId = JSON.parse(jsonObjet)
        console.log("Total Cart Item:",this.props.cartItem)
        const navigation = this.props.navigation
        return(
          <View>
            {renderIf(this.props.cartItem.length != 0)(
                <View>
                    <View style = {{height:80,width:deviceWidth,backgroundColor:'#E13530',borderRadius:1}}>
                    <View style = {{flexDirection:'row',top:25,left:12}}>
                    <Image style={{height:25,width:25,tintColor:'white'}} source={require('../Assets/icons8-rupee-24.png')} />
                        <Text style = {{fontSize:20,fontWeight:'bold',color:'white'}}>{this.props.cartTotal}</Text>
                    </View> 
                    <View style = {{flexDirection:'row-reverse',right:14}}>
                    <Image style={{height:25,width:20,tintColor:'white',marginLeft:12}} source={require('../Assets/icons8-arrow-30.png')} />
                    <TouchableOpacity 
                      style={StyleSheet.button}
                      onPress={() => navigation.navigate('PayMentPage')}
                    >
                       <Text style = {{fontSize:20,fontWeight:'bold',color:'white'}}>CheckOut</Text>
                    </TouchableOpacity>
                    </View>
                    </View>
                </View>
            )} 
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
export default  connect(mapStateToProps)(TotalPriceScreen);

const styles = StyleSheet.create({
  
});