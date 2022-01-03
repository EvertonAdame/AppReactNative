import React, { useState } from "react";
import { Picker, View } from "react-native";
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
  LineChartContainer,
  PickerWrapper,
} from "../styles/screens/CryptoDetails";
import LottieView from "lottie-react-native";
import LoadingJson from "../assets/login.json";
import LineChartInfo from "../components/LineChart";
import millify from "millify";
import { Fontisto } from '@expo/vector-icons'; 
import DropDownPicker from 'react-native-dropdown-picker';

const CryptoDetails = ({ route, navigation }) => {
  const [timePeriod, setTimePeriod] = useState("7d");
  const { coinId } = route.params;
  const { data: coinHistory } = useGetCryptoHistoryQuery({
    coinId,
    timePeriod,
  });
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];


  const cryptoDetails = data?.data?.coin;
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
    <LinearGradient
      colors={["rgb(83, 1, 94) 0,", "hsla(253,16%,7%,1) 0"]}
      end={{ x: 0.3, y: 0.4 }}
      style={{ flex: 1 }}
    >
      <DetailsContainer>
        <DetailsHeader>
          <DetailsTitle>
            {cryptoDetails?.name}({cryptoDetails?.slug})
          </DetailsTitle>
          <DestailsP>Preço em dollar.</DestailsP>
        </DetailsHeader>
        <PickerWrapper>
          <Picker
       supportedOrientations={["portrait", "landscape"]}
            dropdownIconColor="#fff"
            dropdownIconRippleColor="fff"
            mode="dropdown"
            ArrowDownIconComponent={({style}) => <Fontisto name="date" size={24} color="black" />}
            selectedValue={timePeriod}
            style={{ height: 50, width: 150, color: "#747474", fontSize: 30 }}
            onValueChange={(value) => setTimePeriod(value)}
          >
            {time.map((date) => (
              <Picker.Item key={date} color="blue" value={date} label={date} />
            ))}
            
          </Picker>
   
        </PickerWrapper>
        <LineChartContainer>
          <LineChartInfo
            coinHistory={coinHistory}
            currentPrice={millify(cryptoDetails.price)}
            coinName={cryptoDetails.name}
          />
        </LineChartContainer>
      </DetailsContainer>
    </LinearGradient>
  );
};

export default CryptoDetails;
