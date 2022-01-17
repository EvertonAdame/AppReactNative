import React, { useState, useContext } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import {
  Dialog,
  Portal,
  Text,
  Avatar,
  List,
  Divider,
} from "react-native-paper";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { ExpenseTrackerContext } from '../../../contexts/context';


const ListScroll = () => {
  const [visible, setVisible] = useState(false);

  const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext);


  const openDialog = () => {
    setVisible(true);
  };
  const closeDialog = () => {
    setVisible(false);
  };



  return (
    <>

   
          <Dialog.ScrollArea>
            <ScrollView contentContainerStyle={{ paddingHorizontal: 14 }}>
              {transactions.map((transaction) => (
                <ScrollView key={transaction.id} >
                <View> 
                  <List.Item
              
                    title={transaction.category}
                    right={(props) => (
                      
                      <Text {...props} style={{ marginTop: 28 }}>
                        Dia: {transaction.date}
                      </Text>
                     
                    )}
                    description={transaction.amount}
                    left={(props) =>
                      transaction.type === "Income" ? (
                        <List.Icon
                          {...props}
                          color="green"
                          icon="arrow-up-bold"
                        />
                      ) : (
                        <List.Icon
                          {...props}
                          color="red"
                          icon="arrow-down-bold"
                        />
                      )
                    }
                  />
                  <Divider />
                  
                  </View>
                    <MaterialCommunityIcons name="delete" size={24} color="purple" onPress={() => deleteTransaction(transaction.id)} style={{position: "absolute", right: 0, top: 5}}/>
                </ScrollView>
              ))}
            </ScrollView>
          </Dialog.ScrollArea>
  
    </>
  );
};

export default ListScroll;
