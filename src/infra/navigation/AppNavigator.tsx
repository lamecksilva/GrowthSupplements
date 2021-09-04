import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { MainRoutes } from './RootStackParams';

import { HomePage } from '../../presentation/pages/Home';
import { OrdersPage } from '../../presentation/pages/Orders';
import { ProfilePage } from '../../presentation/pages/Profile';

const Stack =
  createNativeStackNavigator<import('./RootStackParams').MainStackParamList>();

function StackNavigator(): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen name={MainRoutes.Home} component={HomePage} />
      <Stack.Screen name={MainRoutes.Orders} component={OrdersPage} />
      <Stack.Screen name={MainRoutes.Profile} component={ProfilePage} />
    </Stack.Navigator>
  );
}

export function AppNavigator(): JSX.Element {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
