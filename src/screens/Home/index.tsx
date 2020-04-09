import React from 'react';

import Logo from '~/assets/logo.jpg';
import { Container, NavigateButton, Image } from './styles';
import { AuthNavProps } from '~/types/AuthParamList';

const Home: React.FC<AuthNavProps<'Home'>> = ({ navigation, route }) => {
  return (
    <Container>
      <Image source={Logo} />
      <NavigateButton onPress={() => navigation.navigate('NewRequest')}>
        Order Nowww :)
      </NavigateButton>
    </Container>
  );
};

export default Home;
