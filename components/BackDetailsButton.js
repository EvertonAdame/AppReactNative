import React, { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { View } from "react-native";
import { Ionicons } from '@expo/vector-icons';


const BackDetailsButton = () => {

const navigation = useNavigation();

  const handlePressBackButton = useCallback(() => {
  navigation.goBack();
  }, [navigation])

  return (
    <View style={{width: '100%', height: 20, justifyContent: 'flex-start', paddingLeft: 10, paddingTop: 10}}>
     <Ionicons name="md-chevron-back" size={38} color="white" onPress={handlePressBackButton} />
    </View>
  )
}

export default BackDetailsButton;
