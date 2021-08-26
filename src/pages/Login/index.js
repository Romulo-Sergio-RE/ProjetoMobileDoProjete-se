import React from 'react';
import { View,Button,Image, } from 'react-native';
import Styled from './style';
import Card from '../../components/CardLogin/index';

export default function ({ navigation }){
    
    return(
        <View style={Styled.Container}>
            <Image
                source={require('../../assets/image/Logo.png')}
                style={Styled.Logo}
            />

            <Card navi={navigation}/>
            
        </View>
    );
}