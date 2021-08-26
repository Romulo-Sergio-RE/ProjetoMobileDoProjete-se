import React from 'react';
import { Text,View,Image } from 'react-native';
import Styled from './styled';

export default function (props){
    return(
        <View>        
            <Text style={Styled.Titulo}>{ props.titulo }</Text>
            <Text style={Styled.SubTitulo}>{ props.subTitulo }</Text>
        </View>
    );
}