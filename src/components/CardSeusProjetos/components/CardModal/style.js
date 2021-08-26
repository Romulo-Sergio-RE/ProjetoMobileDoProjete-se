import React from 'react';
import { StyleSheet } from 'react-native';

export default StyledCardModal = StyleSheet.create({
    card:{
        width: 317,
        height: 235,
        borderRadius: 10,
        backgroundColor: "#ffff",
        elevation: 8,
        marginTop: 20,
        marginLeft: 45,
        marginBottom: 5,
        padding: 18,
    },
    containerBnt:{
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"flex-end",
    },
    titulo:{
        fontSize: 18,
        color: "#2F2E41",
        fontWeight: "bold",
        marginBottom: 5,
    },
    texto:{
        fontSize: 16,
        color: "#2F2E41",
        marginBottom: 3,
    },
    descricao:{
        fontSize: 14,
        color: "#2F2E41",
        textAlign: "justify",
        marginBottom: 3,
    },
  
});