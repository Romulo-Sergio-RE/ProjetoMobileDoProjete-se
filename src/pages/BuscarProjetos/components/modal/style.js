import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleModal = StyleSheet.create({ 
    containerBnt:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginLeft: 34,
        marginRight: 20,
        marginBottom: 10,
    },
    titulo:{
        fontSize: 22,
        color: "#5F6368",
        marginTop: 35,
        marginLeft: 34,
        marginBottom: 25,
    },
    subTitulo:{
        fontSize:16,
        color: '#5F6368',
        marginLeft: 34,
        marginBottom: 10,      
    },
    subTituloDado:{
        fontSize:16,
        color: '#5F6368',
        fontWeight: "bold",
        marginLeft: 15,
        marginRight: 34,
    },
    containerSubTitulo:{
        flexDirection:"row",
    },
    texto:{
        fontSize: 16,
        fontWeight: "bold",
        color: '#5F6368',
        textAlign: 'justify',
        marginLeft: 34,
        marginRight: 34,
    },
    InputGrande:{
        width: 342,
        height: 70,
        backgroundColor:'#EDECFF',
        borderRadius:8,
        marginBottom:10,
        marginLeft: 34,
        elevation: 1,    
    },
    contInput:{
        marginTop: 20,
        marginBottom: 10,
    },
    containerInputs:{
        flexDirection:"row",
        alignItems:'center',
        justifyContent: 'space-between',
        marginLeft: 34,
        marginRight: 34,
    },
    tituloInputs:{
        fontSize:16,
        color: '#5F6368',
        marginTop: 10,
        marginRight: 10,
    }

});