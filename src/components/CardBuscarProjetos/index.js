import React from 'react';
import { Text,View,Image,TouchableHighlight } from 'react-native';
import Styled from './styled';

export default function (props){
    return(
        <View style={Styled.card}>   
                <View style={Styled.container}>

                    <View>
                        <Text style={Styled.titulo}>{props.titulo}</Text>
                        <Text style={Styled.texto}>Responsavel: {props.responsavel}</Text>
                        <Text style={Styled.texto}>Prazo: {props.prazo}</Text>
                        <Text style={Styled.texto}>Valor: {props.valor}</Text>
                    </View>

                    <Image
                        source={props.imagem}
                        style={Styled.imagem}
                    />

                </View>
                
                <Text style={Styled.descricao}>{props.descricao}</Text>
        </View>
    );
}