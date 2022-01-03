import React, { useState, useEffect } from 'react'
import { Text } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomName = () => {

const [nome, setNome] = useState('');

AsyncStorage.getItem('NOME').then((nome) =>{
    setNome(nome)
})


    return (
        <>
        <Text>
           Bem Vindo
        </Text><Text>
          {nome}
        </Text>
        </>
    )
}

export default CustomName
