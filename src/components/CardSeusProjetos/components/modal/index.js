import React, { useState } from 'react';
import { Text,View,Modal,TouchableHighlight,StatusBar,ScrollView } from 'react-native';
import Bnt from '../../../../components/ButtonSecundario/index';
import CardModal from '../CardModal/index';

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

                <Text style={Styled.subTitulo}>Categoria:</Text>
                <Text style={Styled.subTitulo}>Titulo do projeto:</Text>
                <Text style={Styled.subTitulo}>Prazo:</Text>

                <ScrollView>
                    <CardModal
                        name={"romulo sergio"}
                        prazo={" 1 mes "}
                        valor={"R$ 3.800,00"}
                        contato={"(85) 99999-9999"}
                        informações={"Caso se interesse vamos entrar em contato para decidirmos melhor e o dia que iniciaremos."}
                    />
                    <CardModal
                        name={"romulo sergio"}
                        prazo={" 1 mes "}
                        valor={"R$ 3.800,00"}
                        contato={"(85) 99999-9999"}
                        informações={"Caso se interesse vamos entrar em contato para decidirmos melhor e o dia que iniciaremos."}
                    />
                    <CardModal
                        name={"romulo sergio"}
                        prazo={" 1 mes "}
                        valor={"R$ 3.800,00"}
                        contato={"(85) 99999-9999"}
                        informações={"Caso se interesse vamos entrar em contato para decidirmos melhor e o dia que iniciaremos."}
                    />
                </ScrollView>

                <View style={Styled.containerBnt}>
                    <TouchableHighlight
                        activeOpacity={1}
                        underlayColor={false}
                        onPress={()=>{setModal(!modal)}}
                    >
                        <Bnt
                            titulo={"Fechar"}
                        />
                    </TouchableHighlight>
                </View>  

            </Modal>
        </View>
    );
}