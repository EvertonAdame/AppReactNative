import styled from "styled-components/native";

export const Container = styled.View`
  padding: 10px;
  margin-top: 5px;
  borderBottomColor: rgba(23, 85, 11, 0.2);
  borderBottomWidth: 2px;
  min-height: 270px;
`;

export const CardContent = styled.View`
  display: flex;
  flex: 1;
  min-height: 250px;
  padding: 10px;
  background-color: rgba(0, 4, 28, 1);
`;

export const ScrollContainer = styled.ScrollView`
  

`
export const CardCryptoName = styled.View``;


export const CardInfo = styled.View`
  padding: 20px;
  margin: 20px 0;
`;

export const ImageWrapper = styled.View`
  height: 120px;
  width: 120px;
  background-color: #fff;
  border-radius: 10px;
  margin-right: 20px;
  justify-content: center;
  align-items: center;
`;

export const TextCard = styled.Text`
 
  margin-top: 8px;
  color: #fff;
  font-size: 16px;

`;

export const TextTitile = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-left: 10px;
  margin-top: 5px;
  color: #fff;
`;

export const CardBox = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

export const TextNumbers = styled.Text`
  color: purple;
  font-weight: bold;
  font-family: monospace;
  font-size: 16px;
`;

export const DetailsButton = styled.TouchableOpacity``;

export const CardHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
