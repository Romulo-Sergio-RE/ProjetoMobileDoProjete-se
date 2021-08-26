import React,{ useState } from 'react';
import { Text,View,Image,TouchableHighlight } from 'react-native';
import ModalProjeto from '../../pages/SeusProjetos/components/Modal/index';
import ModalProposta from './components/modal/index';
import Styled from './styled';


export default function (props){ 

    const [modalAlterar, setModalAlterar] = useState(false);
    const [modalProposta, setModalProposta] = useState(false);

    function ModalAlterar(props) {
        return (
          <View {...props}>
            <Image
                source={require("../../assets/image/Alterar.png")}
                style={Styled.icon}
            />
            <ModalProjeto modalVisivel={modalAlterar} titulo={"Alterar o Projeto"}/>
          </View>
        );
    }
    function ModalPropostaRecevidas(props) {
        return (
          <View {...props}>
            <Image
                source={require("../../assets/image/Propostas.png")}
                style={Styled.icon}
            />
            <ModalProposta modalVisivel={modalProposta} titulo={"Propostas Recebidas"}/>
          </View>
        );
    }
    return(
        <View style={Styled.card}>        
            <Image
                source={props.imagem}
                style={Styled.imagem}
            />

            <Text
                style={Styled.titulo} 
            >{props.titulo}</Text>

            <Text
                style={Styled.texto}
            >{props.texto}</Text>

            <View style={Styled.iconContainer}>
                <TouchableHighlight
                    activeOpacity={1}
                    underlayColor={false}
                    onPress={()=>{setModalProposta(!modalProposta)}}
                >
                    <ModalPropostaRecevidas/>
                </TouchableHighlight>

                <TouchableHighlight
                    activeOpacity={1}
                    underlayColor={false}
                    onPress={()=>{setModalAlterar(!modalAlterar)}}
                >
                    <ModalAlterar/>
                </TouchableHighlight>
                
                <TouchableHighlight
                    activeOpacity={1}
                    underlayColor={false}
                    onPress={()=>{alert("asdsad")}}
                >
                   <Image
                        source={require("../../assets/image/Excluir.png")}
                        style={Styled.icon}
                    />
                </TouchableHighlight>
            </View>

        </View>
    );
}
/*
                <TouchableHighlight
                    activeOpacity={1}
                    underlayColor={false}
                    onPress={()=>{setModal(!modal)}}
                >
                    <ModalAlterar/>
                </TouchableHighlight>
*/