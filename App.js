import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import store from "./app/store";
import StackNavigation from "./stackNavigation/StackNavigation";
import { Provider as PaperProvider } from "react-native-paper";
import { TrackerProvider } from './contexts/context';
import { LinearGradient } from "expo-linear-gradient";
export default function App() {
  return (
    <>
      <Provider store={store}>
      <TrackerProvider>
        <PaperProvider>
          <NavigationContainer>

      
            <StackNavigation />
         
          </NavigationContainer>
        </PaperProvider>
        </TrackerProvider>
      </Provider>
      <StatusBar style="light" />
    </>
  );
}
