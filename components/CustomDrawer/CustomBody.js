import React, { useState, useEffect } from "react";
import { Text } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialCommunityIcons, MaterialIcons,Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import { useNavigation } from '@react-navigation/native';

const CustomBody = () => {
  const navigation = useNavigation(); 
  const [email, setEmail] = useState("");

  AsyncStorage.getItem("EMAIL").then((email) => {
    setEmail(email);
  });



  return (
    <View style={{marginLeft: 5}}>
 
        <Text style={{fontSize: 20, color: 'white', alignItems: 'center', marginBottom: 30}} onPress={() => navigation.navigate('Acompanhamento')} >
        <MaterialCommunityIcons name="note-multiple-outline" size={34} color="white" /> <Text style={{ color: 'white' }}>Tracker</Text>
      </Text>
       
    </View>
  );
};

export default CustomBody;
