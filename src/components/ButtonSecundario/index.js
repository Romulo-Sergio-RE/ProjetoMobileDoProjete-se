import React from 'react';
import { Text,View } from 'react-native';
import Styled from './style';

export default function (props){
    return(
        <View> 
            {
                props.color == 'roxo'
                ?
                <View style={Styled.ButtonGrande}>
                    <Text style={Styled.Titulo}>{ props.titulo}</Text>
                </View>
                :
                <View style={Styled.ButtonPequeno}>
                    <Text style={Styled.TituloDois}>{ props.titulo}</Text>
                </View>
            }           
            
        </View>
    );
}