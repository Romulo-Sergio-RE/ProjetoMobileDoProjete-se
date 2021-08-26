import React, { useState } from 'react';
import { Text,View,Modal,TouchableHighlight,StatusBar,TextInput,ScrollView } from 'react-native';
import Bnt from '../../../../components/ButtonSecundario/index';
import BntP from '../../../../components/ButtonPrincipal/index';
import Inputs from '../../../../components/Inputs/index';

import Styled from './style';

export default function (props){

    const [modal, setModal] = useState(props.modalVisivel);

    return(
        <View style={Styled.container}> 

            <Modal
                animationType={"slide"}
                visible={modal} 
                statusBarTranslucent={true}
            >
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                >
                    <Text style={Styled.titulo}>{props.titulo}</Text>

                    <View style={Styled.containerSubTitulo}>
                        <Text style={Styled.subTitulo}>Categoria:</Text>
                        <Text style={Styled.subTituloDado}>Construção civil</Text>
                    </View>
                    <View style={Styled.containerSubTitulo}>
                        <Text style={Styled.subTitulo}>Prazo desejado:</Text>
                        <Text style={Styled.subTituloDado}>1 mês</Text>
                    </View>
                    <View style={Styled.containerSubTitulo}>
                        <Text style={Styled.subTitulo}>Titulo do projeto:</Text>
                        <Text style={Styled.subTituloDado}>Reforma de Cozinha</Text>
                    </View>
                    <View style={Styled.containerSubTitulo}>
                        <Text style={Styled.subTitulo}>Valores:</Text>
                        <Text style={Styled.subTituloDado}>R$ 3.000,00 à R$ 4.200,00</Text>
                    </View>
                    <View>
                        <Text style={Styled.subTitulo}>Descrição:</Text>
                        <Text style={Styled.texto}>
                            Planejar, mapear e fazer a reforma da cozinha na minha casa, planejando os móveis sob medida. Os dias da semana que terá alguém em casa ser mapeado 
                            é de segunda a quarta pela manhã.Estou disposto a negóciar caso essa faixa esteja muito alta para você. Claro, desde que seja bom para os dois lados. 
                        </Text>
                    </View>

                    <View style={Styled.containerInputs}>
                        <Text style={Styled.tituloInputs}>Valor para a proposta:</Text>
                        <Inputs/>
                    </View>
                    <View style={Styled.containerInputs}>
                        <Text style={Styled.tituloInputs}>Prazo para a proposta:</Text>
                        <Inputs/>
                    </View>
                    <View style={Styled.containerInputs}>
                        <Text style={Styled.tituloInputs}>Telefone para a contato:</Text>
                        <Inputs/>
                    </View>

                    <View style={Styled.contInput}>
                        <Text style={Styled.subTitulo}>Informações opcionais:</Text>
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
                </ScrollView>         
            </Modal>
        </View>
    );
}