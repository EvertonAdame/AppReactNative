import React, { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { View } from "react-native";
import { Ionicons } from '@expo/vector-icons';


const BackButton = () => {

const navigation = useNavigation();

  const handlePressBackButton = useCallback(() => {
  navigation.goBack();
  }, [navigation])

  return (
    <View style={{width: '100%', height: 40, alignContent: 'center',  paddingLeft: 90}}>
     <Ionicons name="md-caret-back-circle-outline" size={38} color="#a403ff" onPress={handlePressBackButton}/>
    </View>
  )
}

export default BackButton;
