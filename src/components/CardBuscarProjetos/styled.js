import React from 'react';
import { StyleSheet } from 'react-native';

export default StyledCardBuscarProjetos = StyleSheet.create({
   
    card:{
        width: 260,
        height: 170,
        borderRadius: 10,
        backgroundColor: "#ffff",
        elevation: 4,
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 40,
        padding: 10,
    },
    container:{
        flexDirection: "row"
    },
    container2:{
        flexDirection: "column"
    },
    titulo:{
        fontSize: 15,
        color: "#2F2E41",
        fontWeight: "bold",
        marginBottom: 5,
    },
    texto:{
        fontSize: 12,
        color: "#2F2E41",
        marginBottom: 3,
    },
    descricao:{
        fontSize: 12,
        color: "#2F2E41",
        textAlign: "justify",
        marginBottom: 6,
    },
    imagem:{
        width: 60,
        height: 50,
        marginLeft: 10,
        marginTop: 10,
       
    },
   
});