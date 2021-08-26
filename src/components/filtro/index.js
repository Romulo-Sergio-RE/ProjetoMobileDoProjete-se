import React from 'react';
import { Text,View,Image } from 'react-native';
import Styled from './styled';

export default function (props){
    return(
        <View style={Styled.container}>   

            <Text style={Styled.titulo}>Filtrar por:</Text>

            <View style={Styled.containerTitulo}>
                <Text style={Styled.subTitulo}>{props.titulo}</Text>
                <Image
                    source={require("../../assets/image/seta.png")}
                    style={Styled.Imagem}
                />
            </View>
        </View>
    );
}