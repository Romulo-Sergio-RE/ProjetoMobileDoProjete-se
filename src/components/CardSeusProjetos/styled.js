import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleCardSeusProjetos = StyleSheet.create({
    card:{
        width:260,
        height: 300,
        backgroundColor: "#ffff",
        elevation: 4,
        borderRadius: 10,
        marginTop: 40,
        marginLeft: 40,
        marginBottom: 10,
    },
    imagem:{
        width: 130,
        height: 100,
        marginTop: 15,
        marginLeft: 65,
        marginBottom: 10,
    },
    titulo:{
        fontSize: 16,
        color: "#2F2E41",
        fontWeight: "bold",
        marginLeft: 20,
        marginBottom: 5,
    },
    texto:{
        fontSize: 14,
        color: "#2F2E41",
        textAlign: "justify",
        marginLeft: 20,
        marginRight: 20,
    },
    iconContainer:{
        flexDirection:"row",
        alignItems: "center",
        justifyContent:"flex-end",
        marginRight: 20,
        
    },
    icon:{
        width: 20.8,
        height: 23,
        marginTop: 10,
        marginLeft: 20,
    },
});