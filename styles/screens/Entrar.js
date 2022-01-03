import React from 'react';
import styled from "styled-components";


// export const CaixaBranca = styled.View`
 

// `;

export const CaixaAzul = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContainerInputForgot = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
   position: relative;
`

export const SenhaInput = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
  height: 50px;
  padding: 10px;
 
`;

export const CadastrarText = styled.Text`
  color: #ffffff;
  margin-top: 60px;
  font-size: 16px;
`;

export const CadastrarTextBold = styled.Text`
  font-weight: bold;
  font-size: 16px;
  margin-top: 60px;
  color: #ffffff;
`;
export const CadastrarTextButton = styled.TouchableOpacity`
  flex-direction: row;
  
`;

export const EntrarButton = styled.TouchableOpacity`
  align-items: center;
  margin-top: 50px;
  margin-bottom: 10px;
  width: 100%;
  justify-content: center;
  display: flex;
`;
export const CadastrarButton = styled.TouchableOpacity`
  align-items: center;
  margin-top: 10px;
  width: 100%;
  justify-content: center;
  display: flex;
`

export const EntrarText = styled.Text`
  padding: 15px;
  width: 100%;
  font-weight: bold;  
  color: #FFF;
  text-align: center;

`;

export const LoginText = styled.Text`
  font-size: 30px;
  margin-bottom: 50px;
  padding: 10px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 10px;

`;

export const EmailInput = styled.View`
   flex-direction: row;
  justify-content: space-between;
  border-radius: 16px;
  height: 50px;
  padding: 10px;
`;

export const EsqueciMinhaSenhaButton = styled.TouchableOpacity`
  position: absolute;
  top: 100%;
  right: 10%;
`;

export const EsqueciMinhaSenhaText = styled.Text`
  font-weight: bold;
  color: #ffffff;
`;
