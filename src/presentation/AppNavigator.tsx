import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { HomePage } from './pages/Home';
import { OrderPage } from './pages/Orders';
import { ProfilePage } from './pages/Profile';

const Stack = createNativeStackNavigator();

function StackNavigator(): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Order" component={OrderPage} />
      <Stack.Screen name="Profile" component={ProfilePage} />
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
