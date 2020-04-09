import styled from 'styled-components/native';

export const Container = styled.View`
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
export const SizeContent = styled.View`
  width: 100%;
`;
export const SizeList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: 0 30px;
`;
export const Size = styled.TouchableOpacity`
  flex-direction: row;
  height: 50px;
  margin-bottom: 10px;
  border-radius: 4px;
  background: #ccc;
  align-items: center;
  justify-content: space-around;
`;
export const Label = styled.Text`
  color: #42ad36;
  font-size: 14px;
`;

export const Price = styled.Text`
  color: #42ad36;
  font-size: 14px;
  font-weight: bold;
`;
