import React, { useState, useEffect } from 'react';
import { StatusBar, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RequestNavProps } from '~/types/RequestParamList';
import api from '~/services/api';
import { formatPrice } from '~/Utils/formatPrice';
import {
  Container,
  Title,
  SizeContent,
  SizeList,
  Size,
  Label,
  Price,
} from './styles';

import { ItemInterface, SizeInterface } from './interfaces';

const ChooseSize: React.FC<RequestNavProps<'ChooseSize'>> = ({
  navigation,
}) => {
  const [sizes, setSizes] = useState<[SizeInterface]>();

  async function loadSizes() {
    try {
      const response = await api.get('/sizes');
      const data = response.data.map((d: SizeInterface) => ({
        ...d,
        formattedPrice: formatPrice(d.price),
      }));
      setSizes(data);
    } catch (err) {
      Alert.alert('Error', 'Connection error');
    }
  }

  useEffect(() => {
    loadSizes();
  }, []);

  return (
    <Container>
      <StatusBar backgroundColor="#42ad36" barStyle="light-content" />
      <Title>Select the size: </Title>
      <SizeContent>
        <SizeList
          data={sizes}
          keyExtractor={(size: SizeInterface) => String(size.id)}
          renderItem={({ item: size }: ItemInterface) => (
            <Size onPress={() => navigation.navigate('ChooseCrust', { size })}>
              <Label>{size.size}</Label>
              <Price>{size.formattedPrice}</Price>
            </Size>
          )}
        />
      </SizeContent>
    </Container>
  );
};

ChooseSize.navigationOptions = ({ navigation }) => ({
  title: 'First step',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Icon name="chevron-left" size={30} color="#fff" />
    </TouchableOpacity>
  ),
});

export default ChooseSize;
