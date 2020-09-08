import { StatusBar } from 'expo-status-bar';

import React, { Component } from 'react';

import {Dimensions, StyleSheet, Text, SafeAreaView, ScrollView ,View,Image,TouchableOpacity} from 'react-native';
import renderIf from './renderIf'
import {connect} from 'react-redux'



class AddPlusMinusBtn extends Component {
    render(){
        // console.log("addPlus:",this.props.selectData,this.props.id)
        const selectedCardData =  this.props.selectData
          // console.log("selectedCardData:",selectedCardData)

        //   selectedCardData.filter((v,i,a)=>a.findIndex(t=>(t.id === v.id))===i)
        //   console.log("selectedCardData:",selectedCardData)
        return(
          <View style = {{flexDirection:'row'}}>     
             {renderIf(this.props.id == selectedCardData.id )(
                <View style = {{flexDirection:'row'}}>
                  <Text style={{height:10,width:5}}></Text>
                  <View >
                      <TouchableOpacity
                      style = {StyleSheet.button}
                      onPress={()=>this.props.removeItemToCart(selectedCardData)}
                      >
                      <Image style={{height:24,width:24,backgroundColor:'white',borderRadius:22/2,top:-1,}} source={require('../Assets/icons8-minus-24.png')} />
                      </TouchableOpacity>
                  </View>
                  
                  <Text style={{height:10,width:5}}></Text>

                  <View >
                    <TouchableOpacity
                    style = {StyleSheet.button}
                    onPress={()=>this.props.addItemToCart(selectedCardData)}
                    >
                    <Image style={{height:24,width:24,backgroundColor:'white',borderRadius:22/2,top:-1}} source={require('../Assets/icons8-plus-24.png')} />
                    </TouchableOpacity>
                  </View>
                </View>
                )
              }                   
          </View>
        );
    }
}
// const mapStateToProps = (state) => {
//     return {
//         // cartItem: state
//         cartItem:state.cart.cart,
//     }
//   }
const mapDisPatchToProps = (dispatch) => {
    return {
      addItemToCart:(item) => dispatch({type:'ADD_TO_CART',
       payload:item }),
      removeItemToCart:(item) => dispatch({type:'REMOVE_FROM_CART',
       payload:item })
    }
  }

export default  connect(null,mapDisPatchToProps)(AddPlusMinusBtn);

const styles = StyleSheet.create({
  
});