import React, { useState } from 'react';
import { Text,View,TouchableHighlight, } from 'react-native';
import Bnt from '../../../ButtonPrincipal/index';
import Styled from './style';

export default function (props){

    return(
        <View style={Styled.card}> 

            <Text style={Styled.titulo}>{props.name}</Text>
            <Text style={Styled.texto}>Prazo desejado: {props.prazo}</Text>
            <Text style={Styled.texto}>Valor: {props.valor}</Text>
            <Text style={Styled.texto}>Contato: {props.contato}</Text>
            <Text style={Styled.descricao}>{props.informações}</Text>

            <View style={Styled.containerBnt}>
                <Bnt 
                    titulo={"Aprovar"}
                />
            </View>
        </View>
    );
}