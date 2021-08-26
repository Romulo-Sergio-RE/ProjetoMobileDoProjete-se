import React from 'react';
import { Text,View,Image } from 'react-native';
import Styled from './style';
import Inputs from '../../components/Inputs/index'

export default function (){
    return(
        <View style={Styled.container}>
            <Image
                source={require("../../assets/image/Perfil.png")}
                style={Styled.imagem}
            />

            <View style={Styled.containerPerson}>
                <Image
                    source={require("../../assets/image/Perfil.png")}
                    style={Styled.imagemAvatar}
                />

                <View style={Styled.containerTitulo}>
                    <Text style={Styled.namePerson}>Romulo Sergio</Text>
                    <Text style={Styled.tipoPerson}>Pessoa Fisica</Text>
                </View>                   
            </View>

            <Inputs
                inputFormat={"normal"}
                tamanho={"grande"}
                titulo={"Email:"}
                placeholder={"romulo@gmail.com"}
            />
            <View style={Styled.containerInputs}> 
                <Inputs 
                    titulo={"Cep:"}
                    placeholder={"000000-000"}
                />
                <Inputs 
                    titulo={"Estado:"}
                    placeholder={"Ceara"}
                />
            </View>

            <View style={Styled.containerInputs}> 
                <Inputs 
                    titulo={"Cidade:"}
                    placeholder={"Fortaleza"}
                />
                <Inputs 
                    titulo={"Bairro:"}
                    placeholder={"Jose de Alencar"}
                />
            </View>

            <Inputs
                inputFormat={"normal"}
                tamanho={"grande"}
                titulo={"Endereço:"}
                placeholder={"rua x casa 189"}
            />
        </View>
    );
}