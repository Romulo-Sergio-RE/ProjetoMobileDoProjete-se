import React from 'react';
import { Text,View,Image,TouchableHighlight } from 'react-native';
import Styled from './style';
import Inputs from '../Inputs/index';
import ButtonP from '../ButtonPrincipal/index';
import ButtonS from '../ButtonSecundario/index';

export default function (props){
    return(
        <View style={Styled.CardContainer}>

            <Image
                source={require('../../assets/image/Login.png')}
                style={Styled.Imagem}
            />  

            <Inputs 
                titulo={ 'Email:' } 
                inputFormat={ 'normal' }
            />  
            <Inputs 
                titulo={ 'Senha:' } 
                inputFormat={ 'normal' }
            />

            <View style={Styled.ContainerTexto}>
                <Text style={Styled.Texto2}>Não possui Cadastro?</Text>   
                <Text style={Styled.Texto}>Esqueci minha senha</Text>  
            </View>
            
            <TouchableHighlight
                ctiveOpacity={1}
                underlayColor={false}
                onPress={()=> props.navi.navigate('Home')}
            >
                <ButtonP 
                    titulo={ 'Login' } 
                    buttonFormat={ 'normal' } 
                    tamanho={'grande'}
                />
            </TouchableHighlight>


            <ButtonS
                titulo={ 'Ir para o Site' }
                color={ 'roxo' }
            />   
        </View>
    );
}