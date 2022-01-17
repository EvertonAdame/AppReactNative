import React, { useContext }  from "react";
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Divider,
} from "react-native-paper";
import Form from "./Form";
import ListScroll from "./List";
import { ExpenseTrackerContext } from '../../../contexts/context';


const Main = () => {

  const { balance } = useContext(ExpenseTrackerContext);

  return (
    <Card>
      <Card.Title title="Controle de despesas" />
      <Card.Content>
        <Paragraph>Saldo: {balance}</Paragraph>

        <Divider />
        <Form />
        <Divider />
        <ListScroll />
      </Card.Content>
    </Card>
  );
};

export default Main;
