import { StatusBar } from 'expo-status-bar';

import React, { Component } from 'react';

import {Dimensions, StyleSheet, Text, SafeAreaView, ScrollView ,View,Image,TouchableOpacity, ListView,} from 'react-native';
import {  ListItem, Button, Icon } from 'react-native-elements';
import {Card ,Badge} from 'react-native-paper';
import Constants from 'expo-constants';
import { render } from 'react-dom';
import { FlatList } from 'react-native-gesture-handler';
import renderIf from './renderIf'
import ListViewPage from './ListViewPage'
import HeadingPage from './HeadingPage';
import {connect} from 'react-redux'
import TotalPriceScreen from './TotalPriceScreen'

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

class HomePage extends Component {


  constructor (props){
    super(props);
    this.state ={
      totalPrice:0,
      dataList:[
        {id:'1',name:'Hair Cut',dis_price:'400',price:'600',rating:'4.5',time:'5',image:'../Assets/haircut.jpg'},
        {id:'2',name:'Side Cut',dis_price:'500',price:'700',rating:'3.5',time:'3',image:'../Assets/haircut.jpg'},
        {id:'3',name:'Left Cut',dis_price:'300',price:'500',rating:'5',time:'2',image:'../Assets/haircut.jpg'},
        {id:'4',name:'Right Cut',dis_price:'600',price:'800',rating:'4',time:'7',image:'../Assets/haircut.jpg'},
        // {id:'5',name:'Right Cut',dis_price:'260',price:'450',rating:'3',time:'12',image:'../Assets/haircut.jpg'},
      ]
    };
  }
  
    render() {
      const jsonObjet = JSON.stringify(this.props.cartItem)
      const selectedId = JSON.parse(jsonObjet)
      console.log("navigation.navigate:",this.props.navigation)
      // let result = Object.values(selectedId.reduce((a,c) => Object.assign(a, {[c.id]:c}),{}));
        // console.log("Filter:",result);
    return (
      <SafeAreaView style={styles.container}>
        <HeadingPage
         navigation = {this.props.navigation} />
        <ScrollView  showsVerticalScrollIndicator={false} style={styles.scrollView}>
          
            <View >
                <FlatList
                    data = {this.state.dataList}
                    renderItem = {({item}) =>
                    <ListViewPage 
                      data = {item}
                      onPress = {this.props.addItemToCart}
                      addIconData = {selectedId}
                      navigation = {this.props.navigation}
                    />
                    }
                  keyExtractor = {item => item.id}
               />   
            </View>           
        </ScrollView>  
        <TotalPriceScreen
        navigation = {this.props.navigation} />
      </SafeAreaView>
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
export default connect(mapStateToProps,mapDisPatchToProps)(HomePage);

const styles = StyleSheet.create({
  container: {
    // borderWidth:1,
    flex: 1,
    // marginTop: Constants.statusBarHeight,
    // backgroundColor:'#F9F9F9',
    backgroundColor:'white'
  },
  scrollView:{
    // backgroundColor:'black',

    backgroundColor: '#F9F9F9',
    marginHorizontal: 10,
  },
});
