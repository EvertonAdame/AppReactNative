import React, { useState, useEffect } from "react";
import { Text } from "react-native-elements";
import { Image, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Teste from "../../assets/teste.png";
import BackButton from "../BackButton";
import { Fontisto } from '@expo/vector-icons'; 

const CustomHeader = () => {
  const [nome, setNome] = useState("");

  AsyncStorage.getItem("NOME").then((nome) => {
    setNome(nome);
  });

  return (
    <>
      <View
        style={{
          flexDirection: "column",
          backgroundColor: "#000",
          paddingTop: 53,
          paddingLeft: 5,
          borderBottomWidth: 1, borderBottomColor: 'rgb(83, 1, 94) 0',
        }}
      >
        <View style={{ flexDirection: "row", width: "100%" }}>
          <Image
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              marginLeft: 10,
              marginTop: 50,
            }}
            source={Teste}
          />
          <BackButton />
        </View>
        <Text
          style={{
            color: "white",
            fontSize: 22,
            marginLeft: 10,
            marginTop: 10,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          {nome}<Fontisto name="heart" size={18} color="red" />
        </Text>
      </View>
    </>
  );
};

export default CustomHeader;
