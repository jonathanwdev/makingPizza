import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: ${(props) => (props.height ? props.height : '165px')};
  background: #ccc;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

export const Warning = styled.View`
  flex-direction: row;
  justify-content: center;
`;
export const WarningText = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;
export const IntructionsMessage = styled.Text`
  font-size: 13px;
  margin-top: 5px;
`;
