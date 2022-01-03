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
} from "../styles/screens/Home";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  const { data, isFetching } = useGetExchangesQuery();
  const { data: cryptosList } = useGetCryptosQuery();
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
        <ScrollView style={{ paddingTop: 20 }}>
          {cryptos?.map((currency) => (
            <Container key={currency.id}>
              <CardContent>
                <CardHeader>
                  <CardCryptoName>
                    <TextTitile>
                      {currency.rank}. {currency.name}
                    </TextTitile>
                  </CardCryptoName>
                  <DetailsButton
                    onPress={() => {
                      navigation.navigate("Details", {
                        coinId: currency.id,
                      });
                    }}
                  >
                    <MaterialCommunityIcons
                      name="vector-polyline"
                      size={34}
                      color="purple"
                    />
                  </DetailsButton>
                </CardHeader>
                <CardBox>
                  <LinearGradient
                    colors={["rgb(197, 132, 254) 0,", "transparent"]}
                    end={{ x: 0.2, y: 0.4 }}
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
        </ScrollView>
      </LinearGradient>
    </>
  );
};

export default Home;
