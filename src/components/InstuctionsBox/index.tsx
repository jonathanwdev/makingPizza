import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Warning, WarningText, IntructionsMessage } from './styles';

interface Props {
  height?: number;
  fontSize?: string;
}

const InstuctionsBox: React.FC<Props> = ({ height, fontSize }) => {
  return (
    <Container height={height}>
      <Warning>
        <Icon name="warning" size={25} color="#EBC31F" />
        <WarningText>Look !</WarningText>
      </Warning>
      <IntructionsMessage fontSize={fontSize}>
        *You can not repeat ingredients.{'\n'}*Each new addition after the third
        one costs $0.50.
      </IntructionsMessage>
      <IntructionsMessage fontSize={fontSize}>
        Small: Min[1] - Max[5]
      </IntructionsMessage>
      <IntructionsMessage fontSize={fontSize}>
        Medium: Min[1] - Max[7]
      </IntructionsMessage>
      <IntructionsMessage fontSize={fontSize}>
        Large: Min[1] - Max[9]
      </IntructionsMessage>
    </Container>
  );
};

export default InstuctionsBox;
