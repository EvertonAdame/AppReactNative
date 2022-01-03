import React, { useState, useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Home";
import CryptoDetails from './CryptoDetails';
import { Text } from "react-native-elements";
import CustomDrawer from '../components/CustomDrawer/CustomDrawer';


const Drawer = createDrawerNavigator();

const Logado = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={CustomDrawer}
      screenOptions={{
        
        headerStyle:{
          backgroundColor: '#000',
          height: 120,
       
        },
        headerTintColor: '#a403ff',
        headerTitleStyle: {
          fontWeight: 'bold',
         
        }
      }}
     
    >
      <Drawer.Screen
        name="Home"
        component={Home}
       
      />

        <Drawer.Screen
        name="Details"
        component={CryptoDetails}
      />
    </Drawer.Navigator>
  );
};

export default Logado;
