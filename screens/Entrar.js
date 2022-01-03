import React, { useState, useEffect } from "react";
import {
  Alert,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from "@expo/vector-icons";
import usuarioService from "../services/UsuarioService";
import {
  CaixaBranca,
  CaixaAzul,
  SenhaInput,
  CadastrarText,
  CadastrarTextBold,
  CadastrarTextButton,
  EntrarButton,
  EntrarText,
  LoginText,
  EmailInput,
  EsqueciMinhaSenhaButton,
  EsqueciMinhaSenhaText,
  ContainerInputForgot,
  CadastrarButton
} from "../styles/screens/Entrar";



export default function Entrar({ navigation }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [hidePass, setHidePass] = useState(true);


  const entrar = () => {
    let data = {
      username: email,
      password: password,
    };

    usuarioService
      .entrar(data)
      .then((response) => {
        setLoading(false);
        navigation.reset({
          routes: [{ name: "Logado" }],
        });
      })
      .catch((error) => {
        setLoading(false);
        Alert.alert("Usuário inválido");
      });
  };

  const cadastrar = () => {
    navigation.navigate("Cadastro");
  };

  

return (

 <LinearGradient
        colors={['rgb(83, 1, 94) 0,', 'hsla(253,16%,7%,1) 0']}
        end={{ x: 0.3, y: 0.4 }}
            style={{flex:1}}
    >
    <CaixaAzul>
        <LoginText>FullEthe</LoginText>
        <ContainerInputForgot>
         <LinearGradient
        colors={['rgba(45, 1, 58, 1)', 'rgb(83, 1, 94) 0,' ]}
        end={{ x: 0.8, y: 0.9 }}
        style={{width: '85%', borderRadius: 50, alignItems: 'center' }}
            
         >
        <EmailInput>
          <TextInput
            placeholder=" E-mail"
            placeholderTextColor="#fff"
            leftIcon={{ type: "font-awesome", name: "envelope" }}
            onChangeText={(value) => setEmail(value)}
            keyboardType="email-address"
            color="#fff"
             style={{width: '100%'}}
          />
        </EmailInput>
   </LinearGradient>
   <LinearGradient
        colors={['rgba(45, 1, 58, 1)', 'rgb(83, 1, 94) 0,' ]}
        end={{ x: 0.8, y: 0.9 }}
        style={{width: '85%', borderRadius: 50, alignItems: 'center', marginTop: 20  }}
            
         >
        <SenhaInput>
          <TextInput
            placeholder=" Senha"
            placeholderTextColor="#fff"
            text="fff"
            onChangeText={(value) => setPassword(value)}
            secureTextEntry={hidePass}
            color="#fff"
            style={{width: '90%'}}
          />
          <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
            {hidePass ? (
              <Ionicons name="eye" color="#fff" size={25} />
            ) : (
              <Ionicons name="eye-off" color="#fff" size={25} />
            )}
          </TouchableOpacity>
        </SenhaInput>
      </LinearGradient>
      <EsqueciMinhaSenhaButton>
        <EsqueciMinhaSenhaText>Esqueci a senha</EsqueciMinhaSenhaText>
      </EsqueciMinhaSenhaButton>
</ContainerInputForgot>
     
     
          <EntrarButton onPress={() => entrar()}>
          <LinearGradient
        colors={['rgb(83, 1, 64) 0,', 'rgba(45, 1, 58, 0.1)']}
        end={{ x: 0.8, y: 0.9 }}
        style={{width: '55%', borderRadius: 50, alignItems: 'center', }}
            
         >
            <EntrarText>ENTRAR</EntrarText>
         </LinearGradient>
          </EntrarButton>
           
          <CadastrarButton onPress={cadastrar}>
            <LinearGradient
        colors={['rgb(83, 1, 64) 0,', 'rgba(45, 1, 58, 0.1)']}
        end={{ x: 0.8, y: 0.9 }}
        style={{width: '55%', borderRadius: 50, alignItems: 'center', }}
            
         >
            <EntrarText>NOVO CADASTRO</EntrarText>
               </LinearGradient>
          </CadastrarButton>
           
     
    </CaixaAzul>
    </LinearGradient>
  );
}

