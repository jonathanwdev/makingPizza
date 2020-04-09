import styled from 'styled-components/native';

export const CurrentRequestInfo = styled.View`
  width: 100%;
  height: 150px;
  background: #ccc;
  padding: 10px 0 0 0;
  justify-content: space-between;
  border-radius: 4px;
`;
export const RequestTitle = styled.Text`
  text-align: center;
  font-weight: bold;
  color: #fff;
`;
export const Option = styled.View`
  width: 100%;
  padding: 0 20px;
  flex-direction: row;
  justify-content: space-around;
`;
export const OptionName = styled.Text`
  font-size: 15px;
`;
export const OptionPrice = styled.Text``;

export const TotalBox = styled.View`
  width: 50%;
  align-self: center;
  flex-direction: row;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  border-radius: 4px;
`;

export const TotalText = styled.Text`
  color: #fff;
  font-weight: bold;
  text-align: center;
`;
