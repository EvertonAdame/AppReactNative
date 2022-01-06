import React, { useState, useEffect } from "react";
import { Text } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialCommunityIcons, MaterialIcons,Ionicons } from "@expo/vector-icons";



const CustomBody = () => {
  const [email, setEmail] = useState("");

  AsyncStorage.getItem("EMAIL").then((email) => {
    setEmail(email);
  });

  return (
    <>
      <Text style={{fontSize: 20, color: 'white', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: 'white', marginBottom: 30}}>
         <MaterialCommunityIcons name="face-profile" size={34} color="White"/>  <Text style={{ color: 'white' }}>Editar Perfil</Text>
      </Text>
      <Text style={{fontSize: 20, color: 'white', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: 'white', marginBottom: 30}}>
        <MaterialIcons name="favorite" size={34} color="white" /><Text style={{ color: 'white'}}>Moedas Favoritas</Text>
      </Text>
        <Text style={{fontSize: 20, color: 'white', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: 'white', marginBottom: 30}}>
        <Ionicons name="settings" size={24} color="white" /><Text style={{ color: 'white' }}>Configurações</Text>
        </Text>
        <Text style={{fontSize: 20, color: 'white', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: 'white', marginBottom: 30}}>
        <MaterialIcons name="favorite" size={34} color="white" /> <Text style={{ color: 'white' }}>Editar Perfil</Text>
      </Text>
    </>
  );
};

export default CustomBody;
