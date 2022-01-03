import React from 'react';
import { Cadastro, Entrar, Preload, Logado } from '../screens';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";



const Stack = createStackNavigator();


const StackNavigation = () => {


    return (
          <Stack.Navigator initialRouteName="Preload" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Preload" component={Preload} />
            <Stack.Screen name="Entrar" component={Entrar} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="Logado" component={Logado} />
          </Stack.Navigator>
    )



}

export default StackNavigation;