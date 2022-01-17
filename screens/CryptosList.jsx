import React, { useState, useEffect } from "react";
import { ScrollView, Image } from "react-native";
import { Button, CheckBox, Input, Text } from "react-native-elements";
import {
  useGetExchangesQuery,
  useGetCryptosQuery,
} from "../services/cryptoApi";
import millify from "millify";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";
import LoadingJson from "../assets/login.json";
import {
  Container,
  TextCard,
  CardContent,
  CardInfo,
  CardCryptoName,
  ImageWrapper,
  CardBox,
  TextTitile,
  TextNumbers,
  DetailsButton,
  CardHeader,
  ScrollContainer
} from "../styles/screens/CryptosList";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import Logo from "../assets/teste.png";
import NavBar from "../components/NavBar";
import axios from "axios";
import { useNavigation } from '@react-navigation/native'



const CryptosList = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  const navigation = useNavigation();

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

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
        colors={["rgb(83, 1, 94) 0,", "hsla(253,16%,7%,1) 0"]}
        end={{ x: 0.3, y: 0.4 }}
        style={{ flex: 1 }}
      >
        <ScrollContainer>
          {!simplified && (
            <Input 
              placeholder="Procurar moeda"
              onChangeText={(value) => setSearchTerm(value)}
              style={{color: 'white', marginTop: 5}}
              labelStyle={{color: 'white'}}
              rightIcon={<AntDesign name="search1" size={24} color="white" />}
            />
          )}
          {cryptos?.map((currency) => (
            <Container key={currency.uuid}>
              <CardContent>
                <CardHeader>
                  <CardCryptoName>
                    <TextTitile>
                      {currency.rank}. {currency.name}
                    </TextTitile>
                  </CardCryptoName>
                  <DetailsButton
                    onPress={() => {
                      navigation.navigate("Detalhes", {
                        uuid: currency.uuid,
                        name: currency.name
                      });
                    }}
                  >
                    <AntDesign name="doubleright" size={30} color="white" />
                  </DetailsButton>
                </CardHeader>
                <CardBox>
                  <LinearGradient
                    colors={["rgb(197, 132, 254) 0,", "transparent"]}
                    end={{ x: 0.1, y: 0.2 }}
                    style={{ borderRadius: 20 }}
                  >
                    <CardInfo>
                      <TextCard>
                        Preço:{" "}
                        <TextNumbers>{millify(currency.price)}</TextNumbers>
                      </TextCard>

                      <TextCard>
                        CAP de mercado:{" "}
                        <TextNumbers>{millify(currency.marketCap)}</TextNumbers>
                      </TextCard>

                      <TextCard>
                        Mudança diaria:
                        <TextNumbers> {millify(currency.change)}%</TextNumbers>
                      </TextCard>
                    </CardInfo>
                  </LinearGradient>
                  <ImageWrapper>
                    <Image
                      source={{ uri: currency.iconUrl }}
                      style={{ width: 85, height: 85 }}
                    />
                  </ImageWrapper>
                </CardBox>
              </CardContent>
            </Container>
          ))}
        </ScrollContainer>
      </LinearGradient>
    </>
  );
};

export default CryptosList;
