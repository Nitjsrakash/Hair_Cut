import PropTypes from "prop-types";
import React from 'react';
import { Text, View } from 'react-native';
import Fonts from '../../Utils/Fonts';
import TextMarquee from './TextMarquee';
// import { Fonts } from '../../../utils/fonts'



const TextBold = (props) => {
    if (props.marquee) {
        return (
            <View style={props.style}>
                <TextMarquee numberOfLines={1} duration={5000} loop bounce repeatSpacer={50} marqueeDelay={3000}
                    allowFontScaling={false} ellipsizeMode={props.ellipsizeMode} numberOfLines={props.numberOfLines}
                    style={[
                        { fontFamily: Fonts.bold },
                        props.style]}>{props.title}</TextMarquee></View>
        )
    }
    return (
        <Text allowFontScaling={false} ellipsizeMode={props.ellipsizeMode} numberOfLines={props.numberOfLines}
            style={[
                { fontFamily: Fonts.bold },
                props.style]}>{props.title}</Text>
    );
}
const TextSemiBold = (props) => {
    if (props.marquee) {
        return (<View style={props.style}>
            <TextMarquee numberOfLines={1} duration={5000} loop bounce repeatSpacer={50} marqueeDelay={3000}
                allowFontScaling={false} ellipsizeMode={props.ellipsizeMode} numberOfLines={props.numberOfLines}
                style={[
                    { fontFamily: Fonts.semiBold },
                    props.style]}>{props.title}</TextMarquee></View>
        )
    }
    return (
        <Text allowFontScaling={false} ellipsizeMode={props.ellipsizeMode} numberOfLines={props.numberOfLines}
            style={[
                { fontFamily: Fonts.semiBold },
                props.style]}>{props.title}</Text>
    );
}
const TextMedium = (props) => {
    if (props.marquee) {
        return (
            <View style={[props.style, { margin: 0, padding: 0 }]}>
                <TextMarquee numberOfLines={1} duration={5000} repeatSpacer={50} loop bounce marqueeDelay={3000}
                    allowFontScaling={false} ellipsizeMode={props.ellipsizeMode}
                    style={[
                        { fontFamily: Fonts.medium },
                        props.style]}>{props.title}</TextMarquee></View>
        )
    }
    return (
        <Text allowFontScaling={false} ellipsizeMode={props.ellipsizeMode} numberOfLines={props.numberOfLines}
            style={[
                { fontFamily: Fonts.medium },
                props.style]}>{props.title}</Text>
    );
}
const TextRegular = (props) => {
    if (props.marquee) {
        return (
            <View style={props.style}>
                <TextMarquee numberOfLines={1} duration={5000} loop bounce repeatSpacer={50} marqueeDelay={3000}
                    allowFontScaling={false} ellipsizeMode={props.ellipsizeMode} numberOfLines={props.numberOfLines}
                    style={[
                        { fontFamily: Fonts.regular },
                        props.style]}>{props.title}</TextMarquee></View>
        )
    }
    return (
        <Text allowFontScaling={false} ellipsizeMode={props.ellipsizeMode} numberOfLines={props.numberOfLines}
            style={[
                { fontFamily: Fonts.regular },
                props.style]}>{props.title}</Text>
    );
}

const TextLite = (props) => {
    if (props.marquee) {
        return (
            <View style={props.style}>
                <TextMarquee numberOfLines={1} duration={5000} loop bounce repeatSpacer={50} marqueeDelay={3000}
                    allowFontScaling={false} ellipsizeMode={props.ellipsizeMode} numberOfLines={props.numberOfLines}
                    style={[
                        { fontFamily: Fonts.regular, fontWeight: '400' },
                        props.style]}>{props.title}</TextMarquee></View>
        )
    }
    return (
        <Text allowFontScaling={false} ellipsizeMode={props.ellipsizeMode} numberOfLines={props.numberOfLines}
            style={[
                { fontFamily: Fonts.regular, fontWeight: '400' },
                props.style]}>{props.title}</Text>
    );
}
const TextThin = (props) => {
    if (props.marquee) {
        return (
            <View style={props.style}>
                <TextMarquee numberOfLines={1} duration={5000} loop bounce repeatSpacer={50} marqueeDelay={3000}
                    allowFontScaling={false} ellipsizeMode={props.ellipsizeMode} numberOfLines={props.numberOfLines}
                    style={[
                        { fontFamily: Fonts.regular, fontWeight: '100' },
                        props.style]}>{props.title}</TextMarquee></View>
        )
    }
    return (
        <Text allowFontScaling={false} ellipsizeMode={props.ellipsizeMode} numberOfLines={props.numberOfLines}
            style={[
                { fontWeight: '100', fontFamily: Fonts.regular },
                props.style]}>{props.title}</Text>
    );
}


const propsType = {
    style: Text.propTypes.style,
    title: PropTypes.string,
    numberOfLines: PropTypes.number,
    ellipsizeMode: PropTypes.string,
    marquee: PropTypes.bool
};

TextThin.propTypes = propsType;
TextLite.propTypes = propsType;
TextBold.propTypes = propsType;
TextRegular.propTypes = propsType;
TextSemiBold.propTypes = propsType;
TextMedium.propTypes = propsType;


export { TextThin, TextLite, TextBold, TextRegular, TextSemiBold, TextMedium };
