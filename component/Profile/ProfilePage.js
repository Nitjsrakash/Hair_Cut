import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Modal,
  Text,TouchableOpacity, Alert,TextInput
} from 'react-native';

class ProfilePage  extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            proName:'',
            proLName:'',
        }
    }
    
    componentDidMount(){
        const {fname,lname,} = this.props
         this.setState({proName:fname})
         this.setState({proLName:lname})
    }
    saveData(){
        
    }

  render(){
      const {closeDisplay} = this.props
      return(
            <View style={styles.modalBackground}>
                <View style={styles.activityIndicatorWrapper}>
                    <View style = {{flexDirection:'row'}}>
                        <Text style = {{fontSize:18}}>First Name: </Text>
                        <TextInput placeholder = {this.state.proName} style = {styles.textInput_Style} underlineColorAndroid='transparent'
                          onChangeText={(text) => this.setState({proName:text})}
                          value={this.state.proName}
                        />
                    </View>
                    <View style = {{flexDirection:'row'}}>
                        <Text style = {{fontSize:18}}> Last Name: </Text>
                        <TextInput placeholder = {this.state.proLName} style = {styles.textInput_Style} underlineColorAndroid='transparent'
                          onChangeText={(text) => this.setState({proLName:text})} 
                          value={this.state.proLName}
                        />
                    </View>
                    <View style = {{height:40,width:250,flexDirection:"row",justifyContent:'space-around'}}>
                         <View style = {{height:30,width:100,backgroundColor:'#009688',alignItems:'center',borderRadius:10,justifyContent:'center'}}>
                            <TouchableOpacity
                                style = {StyleSheet.button}
                                onPress = {() => closeDisplay()}
                                >
                                <Text style = {{fontSize:20}}>Cancel</Text>
                            </TouchableOpacity> 
                        </View>
                        <View style = {{height:30,width:100,backgroundColor:'#009688',alignItems:'center',borderRadius:10,justifyContent:'center'}}>
                            <TouchableOpacity
                                style = {StyleSheet.button}
                                onPress = {() => closeDisplay()}
                                >
                                <Text style = {{fontSize:20,color:'white'}}>Save</Text>
                            </TouchableOpacity> 
                        </View>         
                    </View>
                </View> 
            </View>
      );
      
  }
}

const styles = StyleSheet.create({ 
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040'
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 200,
    width: 300,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  textInput_Style:
  {
    width: 150,
    height: 35,
    borderColor: '#009688',
    borderWidth: 1,
    backgroundColor: '#fff',
    textAlign:'center'
  }
});

export default ProfilePage;