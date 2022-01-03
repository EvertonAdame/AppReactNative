import React from "react";
import { Button, Text } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ButtonContainer, LogoutText } from "./CustomDrawerStyles";
import { useNavigation } from '@react-navigation/native';



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
    <ButtonContainer onPress={() => sair()}>
      <LogoutText>Sair</LogoutText>
    </ButtonContainer>
  );
};

export default Logout;
