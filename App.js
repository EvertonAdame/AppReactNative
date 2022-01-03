import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import store from "./app/store";
import  StackNavigation from "./stackNavigation/StackNavigation";



export default function App() {

  return (

    <>
      <Provider store={store}>
        <NavigationContainer>
            <StackNavigation/>
        </NavigationContainer>
      </Provider>
    <StatusBar style="light" />
    </>
  );
}
