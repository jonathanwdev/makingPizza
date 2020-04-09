import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container, Text } from './styles';

interface Button {
  children: string;
  loading?: boolean;
  onPress(): void;
}

const Button: React.FC<Button> = ({ children, loading = false, ...rest }) => {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
};

export default Button;
