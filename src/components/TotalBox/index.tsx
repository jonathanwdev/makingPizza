import React from 'react';

import {
  CurrentRequestInfo,
  RequestTitle,
  Option,
  OptionName,
  OptionPrice,
  TotalBox,
  TotalText,
} from './styles';

const Total: React.FC = () => {
  return (
    <CurrentRequestInfo>
      <RequestTitle>Current request:</RequestTitle>
      <Option>
        <OptionName>Small</OptionName>
        <OptionPrice>$8</OptionPrice>
      </Option>
      <TotalBox>
        <TotalText>Total: $18.00</TotalText>
      </TotalBox>
    </CurrentRequestInfo>
  );
};

export default Total;
