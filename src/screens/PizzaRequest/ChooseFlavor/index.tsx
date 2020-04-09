import React, { useState, useEffect } from 'react';
import { StatusBar, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';
import { RequestNavProps } from '~/types/RequestParamList';
import InstructionsBox from '~/components/InstuctionsBox';
import {
  Container,
  Title,
  FlavorContent,
  FlavorList,
  Flavor,
  Label,
  Amount,
  AmountBox,
  AmountText,
  ConfirmFlavorButton,
  Image,
} from './styles';

import { FlavorsInterface, ItemInterface } from './interfaces';
import { ItemInterface as SizeInterface } from '../ChooseSize/interfaces';
import { ItemInterface as CrustInterface } from '../ChooseCrust/interfaces';

const ChooseFlavor: React.FC<RequestNavProps<'ChooseCrust'>> = ({
  navigation,
  route,
}) => {
  const [flavors, setFlavors] = useState<[FlavorsInterface]>();
  const [cart, setCart] = useState<[FlavorsInterface]>([]);
  const { size }: SizeInterface = route.params;
  const { crust }: CrustInterface = route.params;

  async function loadFlavors() {
    try {
      const response = await api.get('/toppings');
      setFlavors(response.data);
    } catch (err) {
      Alert.alert('Error', 'Connection error');
    }
  }

  useEffect(() => {
    loadFlavors();
  }, []);

  function handleAddToCart(product: FlavorsInterface) {
    const producExists = cart?.find(
      (c: FlavorsInterface) => c.id === product.id,
    );
    if (producExists) {
      Alert.alert('Sorry', 'You can not repeat ingredients');
      return;
    }
    if (
      (size.size === 'Small' && cart.length === 5) ||
      (size.size === 'Medium' && cart.length === 7) ||
      (size.size === 'Large' && cart.length === 9)
    ) {
      Alert.alert('Sorry', `You choose ${size.size},  that is your limit`);
      return;
    }

    setCart([...cart, product]);
  }

  function handleRemoveFromCart(product: FlavorsInterface) {
    const producExists = cart?.find(
      (c: FlavorsInterface) => c.id === product.id,
    );
    if (!producExists) {
      return;
    }
    const refreshCart = cart.filter(
      (c: FlavorsInterface) => c.id !== product.id,
    );
    setCart(refreshCart);
  }

  function handleConfirmFlavors() {
    if (cart.length === 0) {
      return;
    }
    navigation.navigate('ConfirmRequest', {
      size,
      crust,
      cart,
    });
  }

  return (
    <Container>
      <StatusBar backgroundColor="#42ad36" barStyle="light-content" />

      <Title>Select the flavors: </Title>
      <InstructionsBox />
      <FlavorContent>
        <FlavorList
          data={flavors}
          keyExtractor={(flavor: FlavorsInterface) => String(flavor.id)}
          renderItem={({ item: flavor }: ItemInterface) => (
            <Flavor>
              <Label>{flavor.flavor}</Label>
              <Amount>
                <TouchableOpacity onPress={() => handleRemoveFromCart(flavor)}>
                  <Icon
                    name="remove-circle-outline"
                    size={20}
                    color="#FF262E"
                  />
                </TouchableOpacity>
                <AmountBox>
                  <AmountText>
                    {cart.find((c: FlavorsInterface) => c.id === flavor.id)
                      ? 1
                      : 0}
                  </AmountText>
                </AmountBox>
                <TouchableOpacity onPress={() => handleAddToCart(flavor)}>
                  <Icon name="add-circle-outline" size={20} color="#6F6FFF" />
                </TouchableOpacity>
              </Amount>
              <Image
                source={{
                  uri: flavor.img_url,
                }}
              />
            </Flavor>
          )}
        />
      </FlavorContent>
      <ConfirmFlavorButton
        disabled={cart.length === 0}
        onPress={() => handleConfirmFlavors()}
      >
        {cart.length === 0 ? 'At least one ingredient' : 'Confirm :)'}
      </ConfirmFlavorButton>
    </Container>
  );
};

ChooseFlavor.navigationOptions = ({ navigation }) => ({
  title: 'Third step',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={30} color="#fff" />
    </TouchableOpacity>
  ),
});

export default ChooseFlavor;
