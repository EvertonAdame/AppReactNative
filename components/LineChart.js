import React from "react";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
} from "react-native-chart-kit";
import { Text } from "react-native-elements";
import { Dimensions, View } from "react-native";
const screenWidth = Dimensions.get("window").width;
import {
  LineChartTitle,
  LineChartDetails,
} from "../styles/components/LineChart";

const LineChartInfo = ({ coinHistory, currentPrice, timePeriod }) => {
  const coinPrice = [];
  const coinTimestamp = [];
 

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(
      new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
    );
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        data: coinPrice,
      },
    ],
  };

  return (
    <View>
      <View>
        <LineChartTitle>
          <LineChartDetails>
            Mudança em {timePeriod} : {coinHistory?.data?.change}%
          </LineChartDetails>
          <LineChartDetails>Preço atual: $ {currentPrice}</LineChartDetails>
        </LineChartTitle>
      </View>
      <LineChart
        data={data}
        verticalLabelRotation={60}
        width={Dimensions.get("window").width} // from react-native
        height={320}
        yAxisLabel="$"
        yAxisSuffix=""
        withVerticalLabels={false}
        withInnerLines={false}
        withOuterLines={false}
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "transparent",
          backgroundGradientFrom: "transparent",
          backgroundGradientTo: "rgb(83, 1, 80)",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          propsForLabels: {
            fontSize: "9",
            fontWeight: "bold",
          },
          style: {
            borderRadius: 20,
          },
          propsForDots: {
            r: "2",
            strokeWidth: "1",
            stroke: "#ffa726",
          },
        }}
        bezier
        style={{
          paddingTop: 40,
          borderRadius: 0,
        }}
      />
    </View>
  );
};

export default LineChartInfo;
