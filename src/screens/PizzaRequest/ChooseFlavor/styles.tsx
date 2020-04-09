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
`;
export const FlavorContent = styled.View`
  width: 100%;
  height: 300px;
`;
export const FlavorList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  paddingVertical: 10,
})`
  padding: 0 30px;
`;
export const Flavor = styled.View`
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
  width: 35%;
`;

export const Amount = styled.View`
  flex-direction: row;
  width: 30%;
  align-items: center;
  justify-content: space-around;
`;

export const AmountBox = styled.View`
  background: #fff;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const AmountText = styled.Text`
  color: #42ad36;
  font-weight: bold;
  font-size: 14px;
`;
export const Image = styled.Image`
  width: 35px;
  height: 35px;
`;

export const ConfirmFlavorButton = styled(Button)`
  background: ${(props) => (props.disabled ? '#eb112f' : '#42ad36')};
  width: 100%;
  height: 50px;
  border: 2px solid;
`;
