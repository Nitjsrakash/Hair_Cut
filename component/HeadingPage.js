import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {Dimensions, StyleSheet,TouchableOpacity, Text,View,Image,Alert} from 'react-native';
import {Badge} from 'react-native-paper';
import Constants from 'expo-constants';
import {connect} from 'react-redux'
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoder/js/geocoder';
 
var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;



class HeadingPage extends Component {

    constructor() {
        super()
        this.state = {
            latitude: 0,
            longitude: 0,
            error: null,
            Address: null,
            getAddressValue: null,
            locationPermission:false,
        }
    }
    async componentDidMount() {
        if (Platform.OS === 'android') {
          await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          );
        }
        Geolocation.getCurrentPosition(
            (position) => {
              this.setState({
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
              });
              Geocoder.fallbackToGoogle("AIzaSyAf9AZOKR7agrgYqd5RPLafRNUp1yfoB1I");
                var pos = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
                }
                Geocoder.geocodePosition(pos)
                .then(json => {
                          console.log(json[0]);
                    var addressComponent = json[0].formattedAddress;
                    this.setState({
                              getAddressValue: addressComponent
                          })
                      })
                      .catch(error => console.warn(error));                  
            },
            (error) => {
              // See error code charts below.
              Alert.alert(error.message)
              console.log("Error:",error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        ); 
    }
    renderAddCartComponent(value){
        if(value != 0) {
            return (
                <Badge style = {{ position: 'absolute', top: -10,left:-10 ,fontSize:15,fontWeight:'bold'}} >
                {value}
                </Badge>
            );
        }
    }
    getAddress(){
        Geolocation.getCurrentPosition(
          (position) => {
            this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            });
            Geocoder.fallbackToGoogle("AIzaSyAf9AZOKR7agrgYqd5RPLafRNUp1yfoB1I");
              var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              }
              Geocoder.geocodePosition(pos)
              .then(json => {
                        console.log(json[0]);
                  var addressComponent = json[0].formattedAddress;
                  this.setState({
                            getAddressValue: addressComponent
                        })
                    })
                    .catch(error => console.warn(error));                  
          },
          (error) => {
            // See error code charts below.
            Alert.alert(error.message)
            console.log("Error:",error.code, error.message);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    } 
    render(){
        // console.log("Heading AddCartItem:",this.props.cartItem)
        return(
        <View style = {styles.headingView}>
            <View style = {{height:100,width:deviceWidth,backgroundColor:'#FFFFFF',borderBottomLeftRadius:deviceWidth/5,borderBottomRightRadius:deviceWidth/5,borderColor:"#FFFFFF",}}>
                <View style = {{height:50, width:deviceWidth,flexDirection:'row'}}>
                    <View style = {{ height:50, width:30}}>
                        <TouchableOpacity
                          style = {styles.button}
                          onPress = {() => this.getAddress()}
                        >
                            <Image  style = {{height:20,width:20,}}
                            source={require('../Assets/icons8-marker-50.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style = {{ height:50, width:250,}}>
                        <Text style = {{color:'gray'}}>Delivery Location</Text>
                        <View style = {{flexDirection:'row'}}>
                            <Text style = {{ color:'black'}} numberOfLines ={5}>{this.state.getAddressValue}  </Text>
                            {/* <Image  style = {{height:15,width:15,}}
                                source={require('../Assets/edit-24.png')}
                            /> */}
                        </View> 
                    </View>
                    <View style = {{flexDirection:'row', padding:10,}}>
                        <View>
                            <Image  style = {{height:20,width:20,marginRight:10}}
                                source={require('../Assets/search-24.png')}
                            />
                        </View>

                        <View style = {{}}>
                            {this.renderAddCartComponent(this.props.cartItem.length)}
                            <TouchableOpacity
                                style = {StyleSheet.button}
                                onPress={() => this.props.navigation.navigate('PayMentPage')} 
                                >
                                <Image  style = {{height:20,width:20,borderWidth:1, }}
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
  