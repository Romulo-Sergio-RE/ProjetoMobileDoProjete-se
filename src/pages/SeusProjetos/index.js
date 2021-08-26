import React from 'react';
import { View,ScrollView, FlatList,TouchableHighlight } from 'react-native';
import Styled from './style';
import Inputs from '../../components/Inputs/index';
import Titulo from '../../components/Titulo&SubTitulo/index';
import ButtonP from '../../components/ButtonPrincipal/index';
import Card from '../../components/CardSeusProjetos/index';
import Filtro from '../../components/filtro/index';
import ModalProjeto from './components/Modal/index';
import { useState } from 'react';


const dataCard = [
    {
        id: 1,
        imagem: require("../../assets/image/CardSeusProjetos.png"),
        titulo:"Sistema E-Commerce",
        texto: "Desenvolver um E-Commerce com um sistema de gestão como retarguarda com o controle de estoque, compras, faturamento, financeiro...",
    },
    {
        id: 2,
        imagem: require("../../assets/image/CardSeusProjetos.png"),
        titulo:"Sistema E-Commerce",
        texto: "Desenvolver um E-Commerce com um sistema de gestão como retarguarda com o controle de estoque, compras, faturamento, financeiro...",
    },
    {
        id: 3,
        imagem: require("../../assets/image/CardSeusProjetos.png"),
        titulo:"Sistema E-Commerce",
        texto: "Desenvolver um E-Commerce com um sistema de gestão como retarguarda com o controle de estoque, compras, faturamento, financeiro...",
    },
];

export default function (){ 

    const [modalCadastrarProjeto, setModalCadastrarProjeto] = useState(false); 

    function ModalCadastrar(props) {
        return (
          <View {...props}>
            <ButtonP
                titulo={ 'Adiconar' }  
            />
            <ModalProjeto modalVisivel={modalCadastrarProjeto} titulo={"Cadastar o Projeto"}/>
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
                    titulo={ 'Seus Projetos' }
                    subTitulo={ 'Veja todos os projetos cadastrados na sua conta' }
                />

                <TouchableHighlight
                    activeOpacity={1}
                    underlayColor={false}
                    onPress={()=>{setModalCadastrarProjeto(!modalCadastrarProjeto)}}
                >
                    <ModalCadastrar/>
                </TouchableHighlight>

            </View>
            
            <Filtro titulo={"Todos"}/>
            
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <Card
                    imagem={require("../../assets/image/CardSeusProjetos.png")}
                    titulo={"Sistema E-Commerce"}
                    texto={"Desenvolver um E-Commerce com um sistema de gestão como retarguarda com o controle de estoque, compras, faturamento, financeiro..."}
                />
                <Card
                    imagem={require("../../assets/image/CardSeusProjetos.png")}
                    titulo={"Sistema E-Commerce"}
                    texto={"Desenvolver um E-Commerce com um sistema de gestão como retarguarda com o controle de estoque, compras, faturamento, financeiro..."}
                />
                <Card
                    imagem={require("../../assets/image/CardSeusProjetos.png")}
                    titulo={"Sistema E-Commerce"}
                    texto={"Desenvolver um E-Commerce com um sistema de gestão como retarguarda com o controle de estoque, compras, faturamento, financeiro..."}
                />

            </ScrollView>
            
            
        </View>
    );
}
/*
                 <FlatList
                    data={dataCard}
                    keyExtractor={(item) => item.id}
                    renderItem={( { item } ) => {                     
                        <Card
                            imagem={item.imagem}
                            titulo={item.titulo}
                            texto={item.texto}
                        />
                    }}
                />
*/