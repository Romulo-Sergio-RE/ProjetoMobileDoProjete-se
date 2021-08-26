import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleCardLogin = StyleSheet.create({
    CardContainer:{
        width: 345,
        height: 500,
        elevation: 3,
        backgroundColor:'#fff',
        borderRadius:12,
        alignItems:'center',
    },
    Imagem:{
        width: 200,
        height: 150,
        marginTop:10,
        marginBottom:10,
    },
    ContainerTexto:{
        flexDirection:'row',
        marginTop:5,
        marginBottom:5,
    },
    Texto:{
        fontSize:13,
        color: '#5F6368',
        marginRight:6,
    },
    Texto2:{
        fontSize:13,
        color: '#6C63FF',
        marginRight:6,
    },
});