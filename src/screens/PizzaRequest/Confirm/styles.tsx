import styled from 'styled-components/native';
import Button from '~/components/Button';

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
  margin-top: 10px;
`;

export const Image = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;

export const InfoBox = styled.View`
  width: 100%;
  height: 420px;
  border-radius: 5px;
  border: 2px solid #42ad36;
  padding: 5px 10px;
`;

export const TextContent = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: 25px;
  margin-top: 5px;
  border: 1px solid #ccc;
`;

export const PizzaText = styled.Text`
  color: #42ad36;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;

export const IngredientContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  margin-top: 5px;
  border: 1px solid #ccc;
`;

export const IngredientBox = styled.View`
  width: 50%;
  align-items: center;
`;

export const IngredientImage = styled.Image`
  width: 30px;
  height: 30px;
`;

export const PizzaFlavorList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  height: 20px;
  padding: 5px 0;
`;
export const TotalPrice = styled.Text`
  font-weight: bold;
  color: #ff3e45;
  font-size: 17px;
`;
export const ConfirmButton = styled(Button)`
  width: 100%;
`;
