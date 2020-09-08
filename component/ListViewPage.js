import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {Dimensions,StyleSheet,Text,View,Image,TouchableOpacity,FlatList} from 'react-native';
import {Card} from 'react-native-paper';
import {CardView} from 'react-native-cardview';
import {connect} from 'react-redux'
import renderIf from './renderIf'
import AddPlusMinus from './AddPlusMinus'
import TotalPriceScreen from './TotalPriceScreen';
import RemoveItem from './RemoveItem'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationService from './../NavigationService/NavigationService';

 var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;
class ListViewPage extends Component { 

      renderCreateViewBtn(navigation,itemValue){
         // console.log("NavigationService:",NavigationService.navigate)
              return(
                <View style={{height:35,width:110, backgroundColor:'black',borderRadius:35/2 ,flexDirection:'row',margin:1,justifyContent: "center",alignItems: "center"}}>
                    <TouchableOpacity
                        style={StyleSheet.button}
                    onPress={() => navigation.navigate('Detail',{ itemData: itemValue })}
                    >
                    <Text style= {{textAlignVertical: "center",textAlign: "center",color:'white',fontSize:15,fontWeight: 'bold'}}> View Detail</Text>
                    </TouchableOpacity>
                 </View>
              );
      }
    renderAddToCratBtn(result,item,itemValue){
      return(
        <View style={{height:35,width:140,backgroundColor:'#E13530',borderRadius:35/2 ,flexDirection:'row',margin:1,justifyContent:'center', alignItems: "center"}}>  
            <FlatList
                // data = {this.props.addIconData}
                data = {result}
                renderItem = {({item}) =>
                <AddPlusMinus 
                selectData = {item}
                id = {itemValue.id}
                // onPress = {this.props.addItemToCart}
                />
                }
                keyExtractor = {item => item.id}
            /> 
         </View>
      );
    }  
    render(){
        // const navigationRef = React.useRef(null);

        console.log("this.props.navigation.navigate:",this.props.navigation )
        const jsonObjet = JSON.stringify(this.props.cartItem)
        const selectedId = JSON.parse(jsonObjet)
        // console.log("selectedId:",selectedId.id)
        // console.log("ListPage AddCartItem Value:",selectedId[0].id)
        let result = Object.values(selectedId.reduce((a,c) => Object.assign(a, {[c.id]:c}),{}));
        console.log("Filter:",result);
      const itemValue = this.props.data
      console.log("itemalue:",itemValue)
        return(
            <View >
                <Card style={{ margin: 10, padding: 10, borderRadius: 5,backgroundColor:'white' }} >
                    <View style={{flexDirection:'row',}}>
                        <View style={{height:100,width:60}} >
                            <Image  style={{height:70,width:58,borderRadius:5}} 
                                source={require('../Assets/haircut.jpg')}
                            /> 
                        </View>
                        <View style={{height:10,width:5}}> 
                        </View>
                        <View style={{height:100,flexDirection:'column',}}>
                            <View style={{height:60,flexDirection:'row',}}>
                                <View style={{height:60,}}>
                                    <View style = {{flexDirection:'column'}}>
                                    <Text style = {{textAlign:'left',fontSize:18}}>{itemValue.name}</Text>
                                        <View style={{flexDirection:'row'}}> 
                                        <Image style={{height:15,width:13,tintColor:'red'}} source={require('../Assets/icons8-star-48.png')} />
                                        <Text style={{height:10,width:3}}></Text>
                                        <Text >{itemValue.rating}</Text>
                                        </View>
                                        <View style={{flexDirection:'row'}}> 
                                            <Image style={{height:13,width:11}} source={require('../Assets/icons8-time-64.png')} />
                                            <Text style={{height:10,width:3}}></Text>
                                            <Text >{itemValue.time} min</Text>
                                        </View>
                                    </View> 
                                </View>
                                <View style={{height:60,flexDirection:'column'}}>
                                    <View style = {{flexDirection:'row-reverse' ,left:118}}>
                                    <Text style = {{fontSize:18,fontWeight:'bold',top:-3}}>{itemValue.dis_price}</Text>
                                    <Image style={{height:16,width:16}} source={require('../Assets/icons8-rupee-24.png')} />
                                    </View> 
                                    <View style = {{flexDirection:'row-reverse',left:125 }}>
                                    <Image style={{height:16,width:16,tintColor:'gray',top:2,textDecorationLine: 'line-through'}} source={require('../Assets/icons8-info-26.png')} />
                                    <Text style = {{fontSize:14,color:'gray',textDecorationLine: 'line-through'}}>{itemValue.price}</Text>
                                    <Image style={{height:16,width:16,tintColor:'gray'}} source={require('../Assets/icons8-rupee-24.png')} />
                                    </View>  
                                </View>
                            </View>

                            {/* Create button */}

                            <View  style={{height:40,width:240,justifyContent:'space-between', flexDirection:'row',}}>
                                {this.renderCreateViewBtn(this.props.navigation,itemValue)}


                                {/* <View style={{height:30,width:5}}>
                                    
                                </View> */}
                                {/* {this.renderAddToCratBtn(result,item,itemValue)} */}

                                {/* Create Add Cart button */}  
                                <View style={{height:35,width:110,backgroundColor:'#E13530',borderRadius:35/2 ,flexDirection:'row',margin:1,justifyContent:'center', alignItems: "center"}}>  
                                    <TouchableOpacity
                                        style={StyleSheet.button}
                                        onPress ={() => this.props.onPress(itemValue)}
                                        >
                                        <Text style= {{color:'white',fontSize:15,fontWeight: 'bold',justifyContent:'center',alignItems:'center'}}>Add</Text>
                                    </TouchableOpacity>
                                    <FlatList
                                        // data = {this.props.addIconData}
                                        data = {result}
                                        renderItem = {({item}) =>
                                        <AddPlusMinus 
                                        selectData = {item}
                                        id = {itemValue.id}
                                        // onPress = {this.props.onPress}
                                        />
                                        }
                                        keyExtractor = {item => item.id}
                                    />        
                                </View>
                            </View>
                        </View>
                    </View>
                </Card>
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

export default connect(mapStateToProps,null)(ListViewPage);

const styles = StyleSheet.create({

    MainContainer: {
  
      flex: 1,
      backgroundColor: '#F5FCFF',
      justifyContent: 'center',
      alignItems: 'center',
  
    },
  
    cardViewStyle:{
  
      width: 250, 
      height: 150,
  
    },
  
    cardView_InsideText:{
  
      fontSize: 20, 
      color: '#000', 
      textAlign: 'center', 
      marginTop: 50    
  
    }
  
  });
