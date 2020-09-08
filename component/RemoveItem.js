import { StatusBar } from 'expo-status-bar';

import React, { Component } from 'react';

import {Dimensions, StyleSheet, Text, SafeAreaView, ScrollView ,View,Image,TouchableOpacity} from 'react-native';
import {  ListItem, Button, Icon } from 'react-native-elements';
import {Card ,Badge} from 'react-native-paper';
import Constants from 'expo-constants';
import { render } from 'react-dom';
import { FlatList } from 'react-native-gesture-handler';
import renderIf from './renderIf'
import {connect} from 'react-redux'



class RemoveItem extends Component {
    render(){
        // console.log("addPlus:",this.props.selectData,this.props.id)
        const selectedCardData =  this.props.selectData
        //   console.log("selectedCardData:",selectedCardData.dis_price)

        //   selectedCardData.filter((v,i,a)=>a.findIndex(t=>(t.id === v.id))===i)
        //   console.log("selectedCardData:",selectedCardData)
        return(
         <View>
            {renderIf(this.props.rightSideId == selectedCardData.id)(
                <View style={{height:24,width:24,backgroundColor:'white',borderRadius:22/2,borderWidth:1,left:11,flexDirection:'row'}}>
                    <TouchableOpacity
                    style = {styles.button}
                    onPress={()=>this.props.addItemToCart(selectedCardData)}
                    >
                    <Image  source={require('../Assets/icons8-plus-24.png')} />
                    <Text style={{height:10,width:4}}></Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style = {styles.button}
                    onPress={()=>this.props.addItemToCart(selectedCardData)}
                    >
                    <Image style={{height:24,width:24,backgroundColor:'white',borderRadius:22/2,borderWidth:1,right:90}} source={require('../Assets/icons8-plus-24.png')} />
                    <Text style={{height:10,width:4}}></Text>
                    </TouchableOpacity>
                </View>
                )
             }     
          </View>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        // cartItem: state
        cartItem:state.cart.cart,
    }
  }
const mapDisPatchToProps = (dispatch) => {
    return {
      addItemToCart:(item) => dispatch({type:'ADD_TO_CART',
       payload:item })
    }
  }

export default  connect(mapStateToProps,mapDisPatchToProps)(RemoveItem);

const styles = StyleSheet.create({
  
});