import React, { useState, useContext } from "react";
import { Text, Button, Menu, Provider } from "react-native-paper";
import { View, ScrollView, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { TextInputMask } from "react-native-masked-text";
import DateTimePicker from "@react-native-community/datetimepicker";
import { ExpenseTrackerContext } from "../../../contexts/context";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { incomeCategories, expenseCategories } from '../../../constants/categories';
import formatDate from '../../../util/formatDate';




const Form = () => {
  const initialState = {
  amount: "",
  category: "Income",
  type: "",
  date: formatDate(new Date()),
};

  const [formData, setFormData] = useState(initialState);
  const [show, setShow] = useState(false);
  const idV4 = uuidv4();
  const { addTransaction } = useContext(ExpenseTrackerContext);

  const createTransaction = () => {
    const transaction = {...formData, amount: Number(formData.amount), id: idV4}
    addTransaction(transaction);
    setFormData(initialState);
  };

  const datePicker = (event, selectedDate) => {
    setFormData({ ...formData, date: selectedDate});
    setShow(false);
  };

  const showDatepicker = () => {
    setShow(true);
  };


  const selectedCategories = formData.type === 'Income' ? incomeCategories : expenseCategories;


  return (
    <ScrollView>
      <View>
        <Text>....</Text>
      </View>
      <ScrollView>
        <View>
          <View style={{ flexDirection: "row", width: "100%", marginTop: 30 }}>
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                width: "50%",
              }}
            >
              <Text style={{ marginBottom: 10 }}>Tipo</Text>
              <Picker
                style={{ width: "100%" }}
                mode="dropdown"
                selectedValue={formData.type}
                onValueChange={(value) =>
                  setFormData({ ...formData, type: value })
                }
                dropdownIconColor="purple"
                supportedOrientations={["portrait", "landscape"]}
              >
                <Picker.Item value="Income" label="Income" />
                <Picker.Item value="Expense" label="Expense" />
              </Picker>
            </View>
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                width: "50%",
              }}
            >
              <Text style={{ marginBottom: 10 }}>Categoria</Text>
              <Picker
                selectedValue={formData.category}
                onValueChange={(value) =>
                  setFormData({ ...formData, category: value })
                }
                style={{ width: "100%" }}
                mode="dropdown"
                dropdownIconColor="purple"
                supportedOrientations={["portrait", "landscape"]}
              >
                {selectedCategories.map((c) => (
                
                <Picker.Item key={c.type} value={c.type} label={c.type} /> 
                ))}
              
              </Picker>
            </View>
          </View>
          <View style={{ width: "100%", flexDirection: "row", marginTop: 30 }}>
            <View
              style={{ backgroundColor: "#fff", width: "40%", marginRight: 20 }}
            >
              <TextInput
                label="Quantidade"
                keyboardType="numeric"
                placeholder="Quantidade"
                value={formData.amount}
                onChangeText={(value) =>
                  setFormData({ ...formData, amount: value })
                }
              />
            </View>
          
          </View>
          <View
            style={{
              marginTop: 20,
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              style={{ width: "70%" }}
              icon="wallet"
              mode="contained"
              onPress={createTransaction}
            >
              Adicionar
            </Button>
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

export default Form;
