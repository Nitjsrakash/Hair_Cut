import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {colors} from  "./Colors"
import Fonts from '../Utils/Fonts';
import NavigationServices from "../../NavigationService/NavigationService";
import { TextSemiBold } from '../../component/Custom/TextView';
import { Title } from 'react-native-paper';



class MyHeader extends Component {


    onBackClick = () => {
        NavigationServices.goBack();
        this.props.onBackPress && this.props.onBackPress()

    }

    renderBackButton() {
        return (
            <TouchableOpacity activeOpacity={0.8}
                style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%' }}
                onPress={() => { if (this.props.leftFireEvent) { this.props.leftFireEvent() } else this.onBackClick() }}>
                <Image  source={require('../../Assets/Back-Button.png')}
                  style={{ width: 15, height: 15, resizeMode: "contain" }}></Image>
                <Text> Back</Text>
            </TouchableOpacity>
        )
    }

    renderLeftImg() {
        return (
            <TouchableOpacity activeOpacity={0.8}
                style={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}
                onPress={() => this.props.leftFireEvent()}>
                <Image source={this.props.leftImg} resizeMode={'contain'} style={{ width: 20, height: 20, borderRadius: 10 }}></Image>
            </TouchableOpacity>
        )
    }

    render() {
        console.log("Myheader:",this.props)
        let {leftImg,noBack,title} = this.props
           
        let sideWidth = "20%", midWidth = "60%";
        return (
            <View style={[styles.toolbar, { backgroundColor: this.props.isTransparent ? 'transparent' : colors.colorPrimary }]}>
                <View style={{
                    width: sideWidth, alignItems: 'center',
                    // backgroundColor: 'red',
                }}>
                    {leftImg ? this.renderLeftImg() : noBack ? null : this.renderBackButton()}

                </View>

                <View style={{
                    width: midWidth, alignItems: 'center',
                    // backgroundColor: 'yellow',
                }}>
                    <TextSemiBold numberOfLines={1} ellipsizeMode={'tail'} style={styles.headerStnName} title={title} />
                </View>
                <View style={{
                    width: sideWidth, alignItems: 'center',
                    justifyContent: 'flex-end', flexDirection: 'row',
                    // backgroundColor: "red"
                }}>
                </View>
            </View>
        )
    }
}

export default MyHeader

const styles = StyleSheet.create({
    toolbar: {
        height: (Platform.OS === 'ios') ? 44 : 56,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        backgroundColor: colors.colorPrimary,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 3,
        shadowRadius: 0,
    },
    headerStnName: {
        color: colors.colorWhite,
        fontSize: 16,
    },
    headerButton: {
        // height: "100%",
        paddingHorizontal: 5,
        // backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center"
    },
    addButton: {
        paddingHorizontal: 5,
        // backgroundColor: "blue",
        marginEnd: 5,
        justifyContent: "center",
        alignItems: "center",
        width: 50,
        backgroundColor: colors.colorWhite,
        height: 25,
        borderRadius: 13

    },
    backBtnText: {
        color: colors.colorWhite,
        fontFamily: Fonts.semiBold
    },

})
