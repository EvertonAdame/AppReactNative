import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { View } from "react-native";
import { useNavigation } from '@react-navigation/native';

const BackButton = () => {

const navigation = useNavigation(); 

    return (

    <View style={{marginRight: 20}}>
     
      <Ionicons name="md-arrow-back-circle-sharp" size={32} color="#a403ff" onPress={() => navigation.navigate('Home')} />
    </View>
    )
}

export default BackButton
