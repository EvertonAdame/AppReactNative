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
 
     
       
    </View>
  );
};

export default CustomBody;
