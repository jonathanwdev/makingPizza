import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthNavProps } from '~/types/AuthParamList';
import { RequestParamList } from '~/types/RequestParamList';

import ChooseCrust from './ChooseCrust';
import ChooseSize from './ChooseSize';
import ChooseFlavor from './ChooseFlavor';
import Confirm from './Confirm';

const RequestStack = createStackNavigator<RequestParamList>();

const globalStyle = {
  headerTintColor: 'rgba(255, 255, 255, 1)',
  headerStyle: {
    backgroundColor: '#42ad36',
  },
  headerTitleStyle: {
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  headerTitleAlign: 'center',
  headerLeftContainerStyle: {
    marginLeft: 20,
  },
};

const PizzaRequest: React.FC<AuthNavProps<'NewRequest'>> = () => {
  return (
    <RequestStack.Navigator screenOptions={globalStyle}>
      <RequestStack.Screen
        name="ChooseSize"
        component={ChooseSize}
        options={ChooseSize.navigationOptions}
      />
      <RequestStack.Screen
        name="ChooseCrust"
        component={ChooseCrust}
        options={ChooseCrust.navigationOptions}
      />

      <RequestStack.Screen
        name="ChooseFlavor"
        component={ChooseFlavor}
        options={ChooseFlavor.navigationOptions}
      />

      <RequestStack.Screen
        name="ConfirmRequest"
        component={Confirm}
        options={Confirm.navigationOptions}
      />
    </RequestStack.Navigator>
  );
};

export default PizzaRequest;
