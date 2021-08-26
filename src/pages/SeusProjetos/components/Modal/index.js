import React, { useState } from 'react';
import { Text,View,Modal,TouchableHighlight,StatusBar,TextInput, } from 'react-native';
import Bnt from '../../../../components/ButtonSecundario/index';
import BntP from '../../../../components/ButtonPrincipal/index';
import Inputs from '../../../../components/Inputs/index';

import Styled from './style';

export default function (props){

    const [modal, setModal] = useState(props.modalVisivel);

    return(
        <View style={Styled.container}> 

            <StatusBar hidden={true}/>

            <Modal
                animationType={"slide"}
                visible={modal} 
                statusBarTranslucent={true}
            >
                <Text style={Styled.titulo}>{props.titulo}</Text>

                <View style={Styled.containerInputsPequeno}>
                    <Inputs 
                        titulo={"Categoria:"}
                        placeholder={"Construção Civil"}
                    />
                    <Inputs
                        titulo={"Capa do Projeto"}
                        placeholder={"Imagem"}
                    />
                </View>

                <View style={Styled.containerInputsPequeno}>
                    <Inputs
                        inputFormat={"normal"}
                        tamanho={"grande"}
                        titulo={"Capa do Projeto"}
                        placeholder={"Imagem"}                       
                    />
                </View>

                <View style={Styled.containerInputsPequeno}>
                    <Inputs 
                        titulo={"Faixa Inicial:"}
                        placeholder={"R$ 000.00"}
                    />
                    <Inputs
                        titulo={"Prazo desejado:"}
                        placeholder={"3 imagem"}
                    />
                </View>

                <View style={Styled.containerInputsPequeno}>
                    <Inputs 
                        titulo={"Telefone 1:"}
                        placeholder={"C(00) 00000-0000"}
                    />
                    <Inputs
                        titulo={"Telefone 2:"}
                        placeholder={"(00) 00000-0000"}
                    />
                </View>

                <View style={Styled.contInput}>
                    <Text style={Styled.tituloDescrição}>Descrição:</Text>
                    <TextInput
                       style={Styled.InputGrande} 
                    />
                </View>

                <View style={Styled.containerBnt}>
                    <TouchableHighlight
                        activeOpacity={1}
                        underlayColor={false}
                        onPress={()=>{setModal(!modal)}}
                    >
                        <Bnt
                            titulo={"Cancelar"}
                        />
                    </TouchableHighlight>
                    
                    <TouchableHighlight
                        activeOpacity={1}
                        underlayColor={false}
                        onPress={()=>{setModal(!modal)}}
                    >
                        <BntP
                            titulo={"Confirmar"}                        
                        />
                    </TouchableHighlight>
                </View>          
            </Modal>
        </View>
    );
}