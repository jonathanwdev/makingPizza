import { RouteProp, ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RequestParamList = {
  ChooseSize: undefined;
  ChooseCrust: undefined;
  ChooseFlavor: undefined;
  ConfirmRequest: undefined;
  navigationOptions: undefined;
};

export type RequestNavProps<T extends keyof RequestParamList> = {
  navigation: StackNavigationProp<RequestParamList, T>;
  route: RouteProp<RequestParamList, T> & ParamListBase;
};
