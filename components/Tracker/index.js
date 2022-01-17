import React from "react";
import Details from "./components/Details";
import { View, ScrollView } from "react-native";
import Main from "./components/Main";
import { LinearGradient } from "expo-linear-gradient";
import BackDetailsButton from "../BackDetailsButton";


const Tracker = () => {
  return (
    <LinearGradient
      colors={["rgb(83, 1, 94) 0,", "hsla(253,16%,7%,1) 0"]}
      end={{ x: 0.3, y: 0.4 }}
      style={{ flex: 1 }}
    >
      <ScrollView style={{ flexDirection: "column", paddingTop: 50 }}>
        <BackDetailsButton />
        
        <View style={{marginTop: 80}}>
          <Main />
        </View>

      </ScrollView>
    </LinearGradient>
  );
};

export default Tracker;
