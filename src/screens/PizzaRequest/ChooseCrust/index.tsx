import React, { useState, useEffect } from 'react';
import { StatusBar, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RequestNavProps } from '~/types/RequestParamList';
import { formatPrice } from '~/Utils/formatPrice';
import api from '~/services/api';

import {
  Container,
  Title,
  CrustContent,
  CrustList,
  Crust,
  Label,
  Price,
} from './styles';

import { CrustInterface, ItemInterface } from './interfaces';
import { ItemInterface as SizeInterface } from '../ChooseSize/interfaces';

const ChooseCrust: React.FC<RequestNavProps<'ChooseCrust'>> = ({
  navigation,
  route,
}) => {
  const [crusts, setCrusts] = useState<[CrustInterface]>();
  const { size }: SizeInterface = route.params;
  async function loadCrusts() {
    try {
      const response = await api.get('/crusts');
      const data = response.data.map((d: CrustInterface) => ({
        ...d,
        formattedPrice: formatPrice(d.price),
      }));
      setCrusts(data);
    } catch (err) {
      Alert.alert('Error', 'Connection error');
    }
  }

  function handleNavigate(crust: CrustInterface) {
    navigation.navigate('ChooseFlavor', {
      size,
      crust,
    });
  }

  useEffect(() => {
    loadCrusts();
  }, []);
  return (
    <Container>
      <StatusBar backgroundColor="#42ad36" barStyle="light-content" />

      <Title>Select the crost: </Title>
      <CrustContent>
        <CrustList
          data={crusts}
          keyExtractor={(crust: CrustInterface) => String(crust.id)}
          renderItem={({ item: crust }: ItemInterface) => (
            <Crust onPress={() => handleNavigate(crust)}>
              <Label> {crust.type}</Label>
              <Price> {crust.formattedPrice}</Price>
            </Crust>
          )}
        />
      </CrustContent>
    </Container>
  );
};

ChooseCrust.navigationOptions = ({ navigation }) => ({
  title: 'Second step',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={30} color="#fff" />
    </TouchableOpacity>
  ),
});

export default ChooseCrust;
