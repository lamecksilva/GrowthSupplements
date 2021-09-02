import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomePage } from './pages/Home';

const Stack = createNativeStackNavigator();

export function AppNavigator(): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} />
    </Stack.Navigator>
  );
}
