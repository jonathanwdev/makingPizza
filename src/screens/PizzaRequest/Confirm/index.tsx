import React from 'react';
import { StatusBar, TouchableOpacity, Alert, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '~/Utils/formatPrice';
import {
  Container,
  Title,
  Image,
  InfoBox,
  TextContent,
  PizzaText,
  PizzaFlavorList,
  TotalPrice,
  ConfirmButton,
  IngredientContent,
  IngredientBox,
  IngredientImage,
} from './styles';
import pizza from '~/assets/logo.jpg';

import { RequestNavProps } from '~/types/RequestParamList';
import { ItemInterface as SizeInterface } from '../ChooseSize/interfaces';
import { ItemInterface as CrustInterface } from '../ChooseCrust/interfaces';
import { FlavorsInterface, ItemInterface } from '../ChooseFlavor/interfaces';

const Confirm: React.FC<RequestNavProps<'ConfirmRequest'>> = ({
  navigation,
  route,
}) => {
  const { size }: SizeInterface = route.params;
  const { crust }: CrustInterface = route.params;
  const { cart }: [FlavorsInterface] = route.params;

  function calcExtra(flavorList: [FlavorsInterface]): number {
    if (flavorList.length > 3) {
      const extra = (flavorList.length - 3) * 0.5;
      return extra;
    }
    return 0;
  }
  const total = formatPrice(calcExtra(cart) + size.price + crust.price);

  return (
    <Container>
      <StatusBar backgroundColor="#42ad36" barStyle="light-content" />
      <Title>Confirm your request here: </Title>
      <Image source={pizza} />
      <InfoBox>
        <TextContent>
          <PizzaText>Size:</PizzaText>
          <PizzaText>
            {size.size} {size.formattedPrice}
          </PizzaText>
        </TextContent>
        <TextContent>
          <PizzaText>Crust: </PizzaText>
          <PizzaText>
            {crust.type} {crust.formattedPrice}
          </PizzaText>
        </TextContent>

        <PizzaFlavorList
          data={cart}
          keyExtractor={(flavor: FlavorsInterface) => String(flavor.id)}
          renderItem={({ item: flavor }: ItemInterface) => (
            <IngredientContent>
              <IngredientBox>
                <PizzaText>{flavor.flavor}</PizzaText>
              </IngredientBox>
              <IngredientBox>
                <IngredientImage
                  source={{
                    uri: flavor.img_url,
                  }}
                />
              </IngredientBox>
            </IngredientContent>
          )}
        />

        <TextContent>
          <TotalPrice>Extra ingredients:</TotalPrice>
          <TotalPrice>{formatPrice(calcExtra(cart))}</TotalPrice>
        </TextContent>
        <TextContent>
          <TotalPrice>TOTAL: </TotalPrice>
          <TotalPrice>{total}</TotalPrice>
        </TextContent>
      </InfoBox>
      <ConfirmButton
        onPress={() => {
          Alert.alert('Success !!', 'Your pizza is being prepared');
          navigation.navigate('Home');
        }}
      >
        Confirm my request :)
      </ConfirmButton>
    </Container>
  );
};

Confirm.navigationOptions = ({ navigation }) => ({
  title: 'Done !',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={30} color="#fff" />
    </TouchableOpacity>
  ),
});

export default Confirm;
