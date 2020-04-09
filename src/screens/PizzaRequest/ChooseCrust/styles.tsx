import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: space-around;
  padding: 20px;
  align-items: center;
`;
export const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #42ad36;
  margin-top: 20px;
`;
export const CrustContent = styled.View`
  width: 100%;
`;
export const CrustList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: 0 30px;
`;
export const Crust = styled.TouchableOpacity`
  flex-direction: row;
  height: 50px;
  margin-bottom: 10px;
  border-radius: 4px;
  background: #ccc;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #42ad36;
`;

export const Label = styled.Text`
  color: #42ad36;
  font-size: 14px;
`;

export const Price = styled.Text`
  color: #42ad36;
  font-weight: bold;
  font-size: 14px;
`;
