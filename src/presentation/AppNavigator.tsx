import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { HomePage } from './pages/Home';

const Stack = createNativeStackNavigator();

function StackNavigator(): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} />
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