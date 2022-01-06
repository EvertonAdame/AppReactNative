import React from "react";
import { Button, Text } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ButtonContainer, LogoutText } from "./CustomDrawerStyles";
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from "expo-linear-gradient";


const Logout = () => {

  const navigation = useNavigation();

  const sair = () => {
    AsyncStorage.removeItem("TOKEN", "").then(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: "Preload" }],
      });
    });
  };

  return (

        <LinearGradient
        colors={["rgb(83, 1, 64) 0,", "rgba(45, 1, 58, 0.4)"]}
        end={{ x: 0.8, y: 0.9 }}
        style={{ position: "absolute", bottom: 20, width: "90%",
        alignItems: "center", 
          marginLeft: 20, borderRadius: 10, justifyContent: "center",
        }}
      >
    <ButtonContainer onPress={() => sair()}>
      <LogoutText>Sair</LogoutText>
    </ButtonContainer>
    </LinearGradient>
  );
};

export default Logout;
