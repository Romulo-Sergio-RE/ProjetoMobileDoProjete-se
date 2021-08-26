import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleModal = StyleSheet.create({
    containerBnt:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginLeft: 34,
        marginRight: 20,
    },
    titulo:{
        fontSize: 22,
        color: "#5F6368",
        marginTop: 35,
        marginLeft: 34,
        marginBottom: 30,
        fontWeight:"bold"
    },
    containerInputsPequeno:{
        flexDirection:"row",
        justifyContent:"space-around",
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
    }, 
    contacontainerInputsGrande:{
        marginTop:20,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
    }, 
    tituloDescrição:{
        fontSize:16,
        color: '#5F6368',
    },
    InputGrande:{
        width: 342,
        height: 70,
        backgroundColor:'#EDECFF',
        borderRadius:8,
        marginBottom:10,
        elevation:1,    
    },
    contInput:{
        marginLeft: 34,
        marginBottom: 50,
    },

});