import React, { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { View } from "react-native";
import { Ionicons } from '@expo/vector-icons';


const NavBar = () => {

  const navigation = useNavigation();

  const handlePressMenuButton = useCallback(() => {
    navigation.openDrawer()
  }, [navigation])

  return (
    <View style={{width: '100%', height: 40, alignContent: 'center', paddingTop: 30, paddingLeft: 8, paddingBottom: 10,}}>
      <Ionicons name="menu" size={38} color="white" onPress={handlePressMenuButton} />
    </View>
  )
}

export default NavBar;
