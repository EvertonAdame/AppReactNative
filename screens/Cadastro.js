import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput, TouchableOpacity, View, Alert } from "react-native";
import { Text } from "react-native-elements";
import { TextInputMask } from "react-native-masked-text";
import { Ionicons } from "@expo/vector-icons";
import usuarioService from "../services/UsuarioService";
import {
  CaixaAzulCadastro,
  CaixaBrancaCadastro,
  ButtonConfirmar,
  SignMessageButtonText,
  ButtonConfirmarCadastroText,
  SignMessageButtonTextBold,
  SignMessageButton,
} from "../styles/screens/Cadastro";

export default function Cadastro({ navigation }) {
  const [email, setEmail] = useState(null);
  const [nome, setNome] = useState(null);
  const [senha, setSenha] = useState(null);
  const [telefone, setTelefone] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorNome, setErrorNome] = useState(null);
  const [errorTelefone, setErrorTelefone] = useState(null);
  const [errorSenha, setErrorSenha] = useState(null);
  const [hidePasss, setHidePasss] = useState(true);
  const [hidePassss, setHidePassss] = useState(true);
  const [isLoading, setLoading] = useState(false);

  const handleMessageButtonClick = () => {
    navigation.navigate("Entrar");
  };

  let telefoneField = null;

  const validar = () => {
    let error = false;
    setErrorEmail(null);
    setErrorSenha(null);

    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())) {
      setErrorEmail("Preencha seu e-mail corretamente");
      error = true;
    }
    if (!telefoneField.isValid()) {
      setErrorTelefone("Preencha seu telefone corretamente");
      error = true;
    }
    if (senha == null) {
      setErrorSenha("Preencha sua senha corretamente");
      error = true;
    }
    if (nome == null) {
      setErrorNome("Preencha seu nome corretamente");
      error = true;
    }

    return !error;
  };

  const salvar = () => {
    if (validar()) {
      setLoading(true);

      let data = {
        email: email,
        nome: nome,
        telefone: telefone,
        senha: senha,
      };

      usuarioService
        .cadastrar(data)
        .then((response) => {
          setLoading(false);
          const titulo = response.data.status ? "Sucesso" : "Erro";
          Alert.alert(titulo, response.data.mensagem);
          navigation.reset({
            routes: [{ name: "Entrar" }],
          });
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
          Alert.alert("Erro", "Houve um erro inesperado");
        });
    }
  };

  return (
    <LinearGradient
      colors={["rgb(83, 1, 94) 0,", "hsla(253,16%,7%,1) 0"]}
      end={{ x: 0.3, y: 0.4 }}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 30,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Cadastro
      </Text>
      <LinearGradient
        colors={["rgba(45, 1, 58, 1)", "rgb(83, 1, 94) 0,"]}
        end={{ x: 0.8, y: 0.9 }}
        style={{
          width: "85%",
          borderRadius: 50,
          marginTop: 20,
          height: 50,
          justifyContent: "center",
        }}
      >
        <TextInput
          placeholder="E-mail"
          placeholderTextColor="#fff"
          onChangeText={(value) => {
            setEmail(value);
            setErrorEmail(null);
          }}
          keyboardType="email-address"
          errorMessage={errorEmail}
          style={{ marginLeft: 20 }}
          color="#fff"
        />
      </LinearGradient>
      <Text>{errorEmail}</Text>

      <LinearGradient
        colors={["rgba(45, 1, 58, 1)", "rgb(83, 1, 94) 0,"]}
        end={{ x: 0.8, y: 0.9 }}
        style={{
          width: "85%",
          borderRadius: 50,
          marginTop: 20,
          height: 50,
          justifyContent: "center",
        }}
      >
        <TextInput
          placeholder="Nome"
          placeholderTextColor="#fff"
          onChangeText={(value) => {
            setNome(value);
            setErrorNome(null);
          }}
          keyboardType="email-address"
          returnKeyType="done"
          style={{ marginLeft: 20 }}
          color="#fff"
        />
      </LinearGradient>
      <Text>{errorNome}</Text>

      <LinearGradient
        colors={["rgba(45, 1, 58, 1)", "rgb(83, 1, 94) 0,"]}
        end={{ x: 0.8, y: 0.9 }}
        style={{
          width: "85%",
          borderRadius: 50,
          marginTop: 20,
          height: 50,
          justifyContent: "center",
        }}
      >
        <View>
          <TextInputMask
            placeholder="Telefone"
            placeholderTextColor="#fff"
            type={"cel-phone"}
            options={{
              maskType: "BRL",
              withDDD: true,
              dddMask: "(99) ",
            }}
            value={telefone}
            onChangeText={(value) => setTelefone(value)}
            keyboardType="phone-pad"
            returnKeyType="done"
            errorMessage={errorTelefone}
            ref={(ref) => (telefoneField = ref)}
            style={{ marginLeft: 20 }}
            color="#fff"
          />
        </View>
      </LinearGradient>
      <Text>{errorTelefone}</Text>

      <LinearGradient
        colors={["rgba(45, 1, 58, 2)", "rgb(83, 1, 94) 0,"]}
        end={{ x: 0.8, y: 0.9 }}
        style={{
          width: "85%",
          borderRadius: 50,
          alignItems: "center",
          marginTop: 20,
          height: 50,
          justifyContent: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "85%",
            alignItems: "center",
          }}
        >
          <TextInput
            placeholder="Senha"
            placeholderTextColor="#fff"
            secureTextEntry={true}
            returnKeyType="done"
            errorMessage={errorSenha}
            onChangeText={(value) => setSenha(value)}
            secureTextEntry={hidePasss}
            style={{ width: "90%" }}
            color="#fff"
          />
          <TouchableOpacity onPress={() => setHidePasss(!hidePasss)}>
            {hidePasss ? (
              <Ionicons name="eye" color="#fff" size={25} />
            ) : (
              <Ionicons name="eye-off" color="#fff" size={25} />
            )}
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <LinearGradient
        colors={["rgb(83, 1, 64) 0,", "rgba(45, 1, 58, 0.1)"]}
        end={{ x: 0.8, y: 0.9 }}
        style={{
          width: "60%",
          borderRadius: 20,
          alignItems: "center",
          justifyContent: `center`,
          marginTop: 50,
        }}
      >
        <ButtonConfirmar onPress={() => salvar()} style={{ width: "100%" }}>
          <ButtonConfirmarCadastroText
            style={{ width: "100%", textAlign: "center" }}
          >
            Cadastrar
          </ButtonConfirmarCadastroText>
        </ButtonConfirmar>
      </LinearGradient>

      <LinearGradient
        colors={["rgb(83, 1, 64) 0,", "rgba(45, 1, 58, 0.1)"]}
        end={{ x: 0.8, y: 0.9 }}
        style={{
          width: "60%",
          borderRadius: 20,
          alignItems: "center",
          justifyContent: `center`,
          marginTop: 20,
        }}
      >
        <ButtonConfirmar
          onPress={() => navigation.navigate("Entrar")}
          style={{ width: "100%" }}
        >
          <ButtonConfirmarCadastroText
            style={{ width: "100%", textAlign: "center" }}
          >
            Voltar
          </ButtonConfirmarCadastroText>
        </ButtonConfirmar>
      </LinearGradient>
    </LinearGradient>
  );
}
