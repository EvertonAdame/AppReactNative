import React, { useState, useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Home";
import CryptoDetails from "./CryptoDetails";
import { Text } from "react-native-elements";
import CustomDrawer from "../components/CustomDrawer/CustomDrawer";
import BackButton from "../components/CustomDrawer/BackButton";
import Tracker from "../components/Tracker";
import CryptosList from "./CryptosList";

const Drawer = createDrawerNavigator();

const Logado = () => {


  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={CustomDrawer}
      screenOptions={{
        drawerType: "back",
        headerStyle: {
          backgroundColor: "#000",
          height: 120,
          shadowColor: "red",
          shadowOffset: {
            width: 0,
            height: 5,
          },
        },
        headerTintColor: "#a403ff",
        headerTitleStyle: {
          fontWeight: "bold",
        },

   
      }}
    >
      <Drawer.Screen
        name="Home"
        options={{ title: 'Bem Vindo',
    
      }}
        component={Home}
      />

      <Drawer.Screen 
      name="Detalhes" 
      options={{ title: 'Detalhes',
      headerRight: () => (<BackButton/>)
      }}
      component={CryptoDetails}
   
       />
      <Drawer.Screen name="Acompanhamento" component={Tracker} />

      <Drawer.Screen name="coins"
      options={{ title: 'Criptomoedas',
      headerRight: () => (<BackButton/>)
      }}
       component={CryptosList} />
    </Drawer.Navigator>
  );
};

export default Logado;
