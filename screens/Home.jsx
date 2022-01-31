import React, { useState, useEffect } from "react";
import { ScrollView, Image } from "react-native";
import { Button, CheckBox, Input, Text } from "react-native-elements";
import {
  useGetCryptosStatsQuery,
  useGetCryptosQuery,
} from "../services/cryptoApi";
import millify from "millify";
import {
  HomeTitle,
  CryptosTitle,
  ContainerTextButton,
  SeeMoreButton,
  TextSeeMore,
  StatsContainer,
  TextInfo,
  InfoContainer,
  TextInfoColored,

} from "../styles/screens/Home";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";
import LoadingJson from "../assets/login.json";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import CryptosList from "./CryptosList";

const Home = ({ navigation }) => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const { data: statsData } = useGetCryptosStatsQuery();


  const dataTotal = statsData?.data;

  if (isFetching)
    return (
      <LinearGradient
        colors={["rgb(83, 1, 94) 0,", "hsla(253,16%,7%,1) 0"]}
        end={{ x: 0.3, y: 0.4 }}
        style={{ flex: 1 }}
      >
        <LottieView source={LoadingJson} autoPlay />
      </LinearGradient>
    );


  return (
    <>
      <LinearGradient
        colors={["rgb(19, 1, 26) 0,", "rgb(83, 1, 94) 0,"]}
        end={{ x: 0.3, y: 0.4 }}
        style={{ flex: 1 }}
      >
        <ScrollView>
          <HomeTitle>Ultimas estatísticas globais de criptomoedas</HomeTitle>
          <StatsContainer>
            <InfoContainer>
            <TextInfo>
              Total de criptomoedas 
            </TextInfo>
            <TextInfoColored>
              {dataTotal?.totalCoins}
            </TextInfoColored>
            </InfoContainer>
            <InfoContainer>
            <TextInfo>
              Valor total de mercado
            </TextInfo>
            <TextInfoColored>
              {millify(dataTotal?.totalMarketCap)}
            </TextInfoColored>
            </InfoContainer>
             <InfoContainer>
            <TextInfo>
              Total de mercados
            </TextInfo>
            <TextInfoColored>
              {millify(dataTotal?.totalMarkets)}
            </TextInfoColored>
            </InfoContainer>
            {/* <InfoContainer>
            <TextInfo>
              Total Exchanges
            </TextInfo>
            <TextInfoColored>
              {millify(statsData?.data.totalExchanges)}
            </TextInfoColored>
            </InfoContainer> */}
               <InfoContainer>
            <TextInfo>
            Volume total 24h 
            </TextInfo>
            <TextInfoColored>
              {millify(dataTotal.total24hVolume)}
            </TextInfoColored>
            </InfoContainer>
          </StatsContainer>
          <ContainerTextButton>
            <CryptosTitle>Top 10 maiores criptomoedas</CryptosTitle>
            <SeeMoreButton onPress={() => navigation.navigate("coins")}>
              <TextSeeMore>Ver mais...</TextSeeMore>
            </SeeMoreButton>
          </ContainerTextButton>
          <CryptosList simplified />
        </ScrollView>
      </LinearGradient>
    </>
  );
};

export default Home;
