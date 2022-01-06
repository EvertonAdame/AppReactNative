import React, { useState, useEffect } from 'react'
import { Text } from 'react-native-elements';
import { Image, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Teste from '../../assets/teste.png';


const CustomHeader = () => {

const [nome, setNome] = useState('');

AsyncStorage.getItem('NOME').then((nome) =>{
    setNome(nome)
})


    return (
        <>
        <View style={{flexDirection: 'column', backgroundColor:'rgb(83, 1, 94) 0,', paddingTop: 80}}>
          <Image style={{ width: 100, height: 100, borderRadius: 50, marginLeft: 10 }}source={Teste} />
        <Text style={{ color: 'white', fontSize: 22, marginLeft: 10, marginTop: 10, fontWeight: 'bold', marginBottom: 10}}>
        Bem Vindo {nome} 
        </Text>

        </View>
        </>
    )
}

export default CustomHeader;
