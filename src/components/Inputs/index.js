import React from 'react';
import { Text,View,TextInput } from 'react-native';
import Styled from './styled';

export default function (props){
    return(
        <View>
            {
                props.inputFormat == 'normal'
                ?
                    props.tamanho == 'grande'
                    ?
                    <View>
                        <Text style={Styled.Texto}>{ props.titulo }</Text>
                        <TextInput
                            style={Styled.InputGrande}
                            placeholder={props.placeholder}
                        /> 
                    </View> 
                    :
                    <View>
                        <Text style={Styled.Texto}>{ props.titulo }</Text>
                        <TextInput
                            style={Styled.InputMedio}
                            placeholder={props.placeholder}
                        /> 
                    </View>  
                :
                <View>
                    <Text style={Styled.Texto}>{ props.titulo }</Text>
                    <TextInput
                        style={Styled.InputPequeno}
                        placeholder={props.placeholder}
                    /> 
                </View>    
            }    
        </View>
    );
}