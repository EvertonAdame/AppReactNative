import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from "../services/cryptoApi";
import { LinearGradient } from "expo-linear-gradient";
import {
  DetailsTitle,
  DetailsContainer,
  DetailsHeader,
  DestailsP,
  DetailsTitleTop,
  LineChartContainer,
  PickerWrapper,
  DetailsTittleChart,
  DetailStats,
  DetailStatsText,
  DetailStatsIcon,
  IconStats,
  TextStats,
  LinksContainer,
  LinksUrl,
  LinkLink,
  DetailsName,
} from "../styles/screens/CryptoDetails";
import LottieView from "lottie-react-native";
import LoadingJson from "../assets/login.json";
import LineChartInfo from "../components/LineChart";
import millify from "millify";
import { Fontisto } from "@expo/vector-icons";
import {
  AntDesign,
  Feather,
  Entypo,
  FontAwesome,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import * as Linking from "expo-linking";
import { Modal } from "react-native";
import { Picker } from "@react-native-picker/picker";
import BackDetailsButton from "../components/BackDetailsButton";
import Sparkline from "react-native-sparkline";

const CryptoDetails = ({ route, navigation }) => {
  const [timePeriod, setTimePeriod] = useState("24h");
  const [visible, setVisible] = useState(false);
  const { uuid, name } = route.params;
  const { data: coinHistory } = useGetCryptoHistoryQuery({
    uuid,
    timePeriod,
  });

  console.log(name)

  const { data, isFetching } = useGetCryptoDetailsQuery(uuid);

  const time = ["3h", "24h", "7d", "30d", "3m", "1y", "3y", "5y"];

  const cryptoDetails = data?.data?.coin;

  console.log(cryptoDetails);
  
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

  const stats = [
    {
      title: "Preço em USD",
      value: `$ ${cryptoDetails.price && millify(cryptoDetails.price)}`,
      icon: <Feather name="dollar-sign" size={24} color="white" />,
    },
    {
      title: "Rank",
      value: cryptoDetails.rank,
      icon: <AntDesign name="trademark" size={24} color="white" />,
    },
    // {
    //   title: "Volume (24hr)",
    //   value: `$ ${cryptoDetails.volume && millify(cryptoDetails.volume)}`,
    //   icon: <Entypo name="bookmarks" size={24} color="white" />,
    // },
    {
      title: "Capitalização de Mercado",
      value: `$ ${cryptoDetails.marketCap && millify(cryptoDetails.marketCap)}`,
      icon: <Feather name="dollar-sign" size={24} color="white" />,
    },
    {
      title: "Máximo histórico (média diária)",
      value: `$ ${millify(cryptoDetails.allTimeHigh.price)}`,
      icon: <Entypo name="price-ribbon" size={24} color="white" />,
    },
  ];
  const genericStats = [
    {
      title: "Número de mercado",
      value: cryptoDetails.numberOfMarkets,
      icon: <Feather name="dollar-sign" size={24} color="white" />,
    },
    {
      title: "Número de trocas",
      value: cryptoDetails.numberOfExchanges,
      icon: <FontAwesome name="trademark" size={24} color="white" />,
    },
    {
      title: "Aprovado para circulação",
      value: cryptoDetails.supply.confirmed ? (
        <AntDesign name="check" size={24} color="white" />
      ) : (
        <AntDesign name="frowno" size={24} color="white" />
      ),
      icon: <Entypo name="circular-graph" size={24} color="white" />,
    },
    {
      title: "Fornecimento total",
      value: `$ ${millify(cryptoDetails.supply.total)}`,
      icon: <MaterialIcons name="stacked-bar-chart" size={24} color="white" />,
    },
    {
      title: "Moedas em circulação",
      value: `$ ${millify(cryptoDetails.supply.circulating)}`,
      icon: <FontAwesome5 name="coins" size={24} color="white" />,
    },
  ];
  const dato = Array.from({ length: 20 }).map(
    (unused, i) => i + (i + 1) * Math.random()
  );
  const closeModal = (value) => {
    setVisible(false);
    setTimePeriod(value);
  };
  return (
    <LinearGradient
      colors={["rgb(83, 1, 94) 0,", "hsla(253,16%,7%,1) 0"]}
      end={{ x: 0.3, y: 0.4 }}
      style={{ flex: 1 }}
    >
      <DetailsContainer>
        <DetailsTitleTop>
          Tabela de preços <DetailsName>{cryptoDetails?.name}</DetailsName>
        </DetailsTitleTop>
        <DestailsP>Preço em dollar.</DestailsP>
        <DetailsHeader>
          <Sparkline data={cryptoDetails.sparkline}>
            <Sparkline.Fill />
          </Sparkline>
        </DetailsHeader>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 20,
            alignItems: "center",
            height: 100,
          }}
        >
          <TouchableOpacity
            style={{
              borderRadius: 10,
              color: "#fff",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",

              width: "32%",
              backgroundColor: "rgb(83, 1, 94)",
              padding: 10,
            }}
            onPress={() => setVisible(true)}
          >
            <Text
              style={{
                color: "#fff",
                marginRight: 20,
                fontSize: 16,
                marginRight: 7,
              }}
            >
              {timePeriod}
            </Text>
            <Fontisto name="date" size={24} color="white" />
          </TouchableOpacity>
          <View style={{ flexDirection: "row" }}>
            <Entypo
              name="arrow-bold-left"
              size={24}
              color="white"
              style={{ marginRight: 10 }}
            />
            <Text style={{ color: "#fff", fontSize: 15, textAlign: "center" }}>
              Alterar gráfico
            </Text>
          </View>
        </View>
        <Modal animated transparent animationType="slide" visible={visible}>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0,0,0,0.8)",
              blur: 20,
            }}
          >
            <View
              style={{ height: 120, width: "70%", backgroundColor: "white" }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "rgb(83, 1, 94)",
                }}
              >
                <MaterialCommunityIcons
                  name="close-circle"
                  size={34}
                  style={{ marginBottom: 2, marginRight: 20, marginLeft: 15 }}
                  color="white"
                  onPress={() => setVisible(false)}
                />
                <View>
                  <Text style={{ marginTop: 13, color: "white" }}>
                    Selecione o periodo de variação
                  </Text>
                  <Text></Text>
                </View>
              </View>
              <Picker
                mode="dropdown"
                style={{ marginLeft: 20, marginTop: 20, width: "90%" }}
                dropdownIconColor="purple"
                supportedOrientations={["portrait", "landscape"]}
                selectedValue={timePeriod}
                onValueChange={(value) => closeModal(value)}
              >
                {time.map((date) => (
                  <Picker.Item key={date} value={date} label={date} />
                ))}
              </Picker>
            </View>
          </View>
        </Modal>

        <LineChartContainer>
          <LineChartInfo
            coinHistory={coinHistory}
            currentPrice={millify(cryptoDetails?.price)}
            coinName={cryptoDetails?.name}
          />
        </LineChartContainer>
        <View className="coin-value=statistics-heading">
          <DetailsTittleChart>
            Estatísticas {cryptoDetails?.name}
          </DetailsTittleChart>
        </View>

        {stats.map(({ icon, title, value }) => (
          <DetailStats
            style={{ borderBottomColor: "purple", borderBottomWidth: 2 }}
          >
            <DetailStatsIcon>
              <IconStats>{icon}</IconStats>
              <TextStats>{title}</TextStats>
            </DetailStatsIcon>
            <DetailStatsText>{value}</DetailStatsText>
          </DetailStats>
        ))}
        <DetailsTittleChart>
          Outras Estatísticas {cryptoDetails?.name}
        </DetailsTittleChart>

        {genericStats.map(({ icon, title, value }) => (
          <DetailStats
            style={{ borderBottomColor: "purple", borderBottomWidth: 2 }}
          >
            <DetailStatsIcon>
              <IconStats>{icon}</IconStats>
              <TextStats>{title}</TextStats>
            </DetailStatsIcon>
            <DetailStatsText>{value}</DetailStatsText>
          </DetailStats>
        ))}
        <DetailsTittleChart>
          Links relacionados ao {cryptoDetails?.name}
        </DetailsTittleChart>
        <View>
          {cryptoDetails?.links.map((link) => (
            <LinksContainer
              className="coin-link"
              key={link?.name}
              style={{ border: "grey", borderBottomWidth: 1 }}
            >
              <LinksUrl>{link?.type}</LinksUrl>
              <LinksUrl onPress={() => Linking.openURL(link.url)}>
                <LinkLink>{link?.name}</LinkLink>
              </LinksUrl>
            </LinksContainer>
          ))}
        </View>
      </DetailsContainer>
    </LinearGradient>
  );
};

export default CryptoDetails;
