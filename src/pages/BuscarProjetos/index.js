import React,{  useState } from 'react';
import { Text,View,ScrollView,TouchableHighlight } from 'react-native';
import Inputs from '../../components/Inputs/index';
import Titulo from '../../components/Titulo&SubTitulo/index';
import Filtro from '../../components/filtro/index';
import Card from '../../components/CardBuscarProjetos/index';
import ModalProjeto from './components/modal/index';
import Styled from './style';

export default function (){
    const [modal, setModal] = useState(false);

    function ModalEnviarProposta(props) {
        return (
          <View {...props}>
            <Card
                titulo={"Reforma de Cozinha"}
                responsavel={"Rafael Rudá"}
                prazo={"1 mês"}
                valor={"R$ 3.000,00 à R$ 4.200,00"} 
                imagem={require("../../assets/image/CardBuscarProjetos.png")}
                descricao={"Planejar, mapear e fazer a reforma da cozinha na minha casa, planejando os móveis sob medida..."}
            />
            <ModalProjeto modalVisivel={modal} titulo={"Enviar Proposta"}/>
          </View>
        );
    }

    return(
        <View style={Styled.container}>
            <Inputs 
                inputFormat={'normal'} 
                tamanho={'grande'} 
                placeholder={'Pesquisar'}
            />

            <View style={Styled.containerTitulo}>
                <Titulo
                    titulo={ "Buscar Projetos" }
                    subTitulo={ "Procure um projeto e lance uma proposta para o dono do projeto." }
                />
            </View>

            <Filtro titulo={"contrução civil"}/>

            <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <TouchableHighlight
                    activeOpacity={1}
                    underlayColor={false}
                    onPress={()=>{setModal(!modal)}}
                >
                    <ModalEnviarProposta/>
                </TouchableHighlight>

                <Card
                    titulo={"Reforma de Cozinha"}
                    responsavel={"Rafael Rudá"}
                    prazo={"1 mês"}
                    valor={"R$ 3.000,00"} 
                    imagem={require("../../assets/image/CardBuscarProjetos.png")}
                    descricao={"Planejar, mapear e fazer a reforma da cozinha na minha casa, planejando os móveis sob medida..."}
                />
                 <Card
                    titulo={"Reforma de Cozinha"}
                    responsavel={"Rafael Rudá"}
                    prazo={"1 mês"}
                    valor={"R$ 3.000,00"} 
                    imagem={require("../../assets/image/CardBuscarProjetos.png")}
                    descricao={"Planejar, mapear e fazer a reforma da cozinha na minha casa, planejando os móveis sob medida..."}
                />
                <Card
                    titulo={"Reforma de Cozinha"}
                    responsavel={"Rafael Rudá"}
                    prazo={"1 mês"}
                    valor={"R$ 3.000,00 à R$ 4.200,00"} 
                    imagem={require("../../assets/image/CardBuscarProjetos.png")}
                    descricao={"Planejar, mapear e fazer a reforma da cozinha na minha casa, planejando os móveis sob medida..."}
                />
            </ScrollView>

            <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <Card
                    titulo={"Reforma de Cozinha"}
                    responsavel={"Rafael Rudá"}
                    prazo={"1 mês"}
                    valor={"R$ 3.000,00 à R$ 4.200,00"} 
                    imagem={require("../../assets/image/CardBuscarProjetos.png")}
                    descricao={"Planejar, mapear e fazer a reforma da cozinha na minha casa, planejando os móveis sob medida..."}
                />
                <Card
                    titulo={"Reforma de Cozinha"}
                    responsavel={"Rafael Rudá"}
                    prazo={"1 mês"}
                    valor={"R$ 3.000,00"} 
                    imagem={require("../../assets/image/CardBuscarProjetos.png")}
                    descricao={"Planejar, mapear e fazer a reforma da cozinha na minha casa, planejando os móveis sob medida..."}
                />
                 <Card
                    titulo={"Reforma de Cozinha"}
                    responsavel={"Rafael Rudá"}
                    prazo={"1 mês"}
                    valor={"R$ 3.000,00"} 
                    imagem={require("../../assets/image/CardBuscarProjetos.png")}
                    descricao={"Planejar, mapear e fazer a reforma da cozinha na minha casa, planejando os móveis sob medida..."}
                />
                <Card
                    titulo={"Reforma de Cozinha"}
                    responsavel={"Rafael Rudá"}
                    prazo={"1 mês"}
                    valor={"R$ 3.000,00 à R$ 4.200,00"} 
                    imagem={require("../../assets/image/CardBuscarProjetos.png")}
                    descricao={"Planejar, mapear e fazer a reforma da cozinha na minha casa, planejando os móveis sob medida..."}
                />
            </ScrollView>
            
        </View>
    );
}