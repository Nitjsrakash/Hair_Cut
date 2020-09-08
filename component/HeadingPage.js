import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {Dimensions, StyleSheet,TouchableOpacity, Text,View,Image} from 'react-native';
import {Badge} from 'react-native-paper';
import Constants from 'expo-constants';
import {connect} from 'react-redux'
 
var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;



class HeadingPage extends Component {

    renderAddCartComponent(value){
        if(value != 0) {
            return (
                <Badge style = {{ position: 'absolute', top: -10,left:-10 ,fontSize:15,fontWeight:'bold'}} >
                {value}
                </Badge>
            );
        }
    }
    render(){
        // console.log("Heading AddCartItem:",this.props.cartItem)
        return(
        <View style = {styles.headingView}>
            <View style = {{height:100,width:deviceWidth,backgroundColor:'#FFFFFF',borderBottomLeftRadius:deviceWidth/5,borderBottomRightRadius:deviceWidth/5,borderColor:"#FFFFFF",}}>
                <View style = {{height:50, width:deviceWidth,flexDirection:'row'}}>
                    <View style = {{ height:50, width:30}}>
                        <Image  style = {{height:20,width:20,}}
                        source={require('../Assets/icons8-marker-50.png')} />
                    </View>
                    <View style = {{ height:50, width:250,}}>
                        <Text style = {{color:'gray'}}>Delivery Location</Text>
                        <View style = {{flexDirection:'row'}}>
                            <Text>AB Road Gurgaon  </Text>
                            <Image  style = {{height:15,width:15,}}
                                source={require('../Assets/edit-24.png')}
                            />
                        </View> 
                    </View>
                    <View style = {{flexDirection:'row', padding:10,}}>
                        <View>
                            <Image  style = {{height:20,width:20,marginRight:10}}
                                source={require('../Assets/search-24.png')}
                            />
                        </View>

                        <View>
                            {this.renderAddCartComponent(this.props.cartItem.length)}
                            <TouchableOpacity
                                style = {StyleSheet.button}
                                onPress={() => this.props.navigation.navigate('PayMentPage')} 
                                >
                                <Image  style = {{height:20,width:20, }}
                                            source={require('../Assets/Card.png')}
                                        />
                             </TouchableOpacity>     
                        </View>  
                    </View>
                </View>
                <Image  style = {{height:80,width:100,bottom:-30,position: 'absolute',alignSelf:'center',borderRadius:5,}} 
                source={require('../Assets/logoimage.jpg')}
                />
                <View style = {{width:120,bottom:-85, alignSelf:'center', flexDirection:'row',justifyContent:'space-between'}}>

                    <Text style= {{textAlignVertical: "center",textAlign: "center",color:'black',fontSize:18,}}>Mark Robot</Text>
                    <Image style = {{height:22,width:22,textAlignVertical: "center",textAlign: "center",color:'black',}}
                    source={require('../Assets/icons8-expand-arrow-64.png')} />
                </View>  
            </View> 
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

export default connect(mapStateToProps)(HeadingPage);


const styles = StyleSheet.create({
    headingView:{
      height:170,
      width:deviceWidth,
    //   borderWidth:1,
      backgroundColor:'#F9F9F9',
    // backgroundColor:'red'

    },
  });
  