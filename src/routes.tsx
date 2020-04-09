import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthParamList } from './types/AuthParamList';

import Home from '~/screens/Home';
import NewRequest from '~/screens/PizzaRequest';

const StackNavigator = createStackNavigator<AuthParamList>();

const ScreenOptions = {
  headerShown: false,
};

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <StackNavigator.Navigator screenOptions={ScreenOptions}>
        <StackNavigator.Screen name="Home" component={Home} />
        <StackNavigator.Screen name="NewRequest" component={NewRequest} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
