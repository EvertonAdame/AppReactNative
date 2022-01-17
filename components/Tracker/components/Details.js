import React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { BarChart, LineChart, PieChart } from "react-native-gifted-charts";
import useTransactions from './useTransactions';

const data = [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }];


const Details = ({title}) => {

  const { total, chartData } = useTransactions(title);


  return (
    <Card>
      <Card.Title title={title} />
      <Card.Content>
        <Paragraph>{total}</Paragraph>
        <PieChart data={data} donut />
      </Card.Content>
    </Card>
  );
};

export default Details;
