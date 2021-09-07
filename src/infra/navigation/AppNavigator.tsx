import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { MainRoutes } from './RootStackParams';

import { HomeScreen } from '@presentation/screens/Home';
import { OrdersScreen } from '@presentation/screens/Orders';
import { ProfileScreen } from '@presentation/screens/Profile';
import { SplashScreen } from '@presentation/screens/Splash';

const Stack =
  createNativeStackNavigator<import('./RootStackParams').MainStackParamList>();

function StackNavigator(): JSX.Element {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name={MainRoutes.Splash} component={SplashScreen} />
      <Stack.Screen name={MainRoutes.Home} component={HomeScreen} />
      <Stack.Screen name={MainRoutes.Orders} component={OrdersScreen} />
      <Stack.Screen name={MainRoutes.Profile} component={ProfileScreen} />
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
