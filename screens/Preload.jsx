import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import usuarioService from '../services/UsuarioService';
import { LinearGradient } from 'expo-linear-gradient';
import LottieView from 'lottie-react-native';
import LoadingJson from '../assets/login.json';


export default function Preload() {


const  navigation = useNavigation();

const [isLoadingToken, setLoadingToken] = useState(false)


useEffect(() => {
const logarComToken = (token) => {
    setLoadingToken(true)
        let data = {
            token: token
        } 
         usuarioService.logarComToken(data)
        .then((response) => {
          setLoadingToken(false)
          navigation.reset({
          routes:[{name: "Logado"}]
     })
    }) 
     .catch((error) => {
          navigation.navigate('Entrar')
        })
      } 
        AsyncStorage.getItem('TOKEN').then((token) => {
           logarComToken(token)
        }) 
    }, [])

   
  const Background = ({children}) => {
    return (
   <LinearGradient
        colors={['rgb(83, 1, 94) 0,', 'hsla(253,16%,7%,1) 0']}
        end={{ x: 0.7, y: 0.4 }}
        style={{flex:1}}
    >
    {children}
    </LinearGradient>
    )
}
    
  return (

      <Background>
            <LottieView source={LoadingJson} autoPlay />
      </Background>
      
  );
}


