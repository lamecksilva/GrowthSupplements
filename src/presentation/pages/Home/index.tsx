import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  MainNavigationProp,
  MainRoutes,
} from '../../../infra/navigation/RootStackParams';

export function HomePage(): JSX.Element {
  const navigation = useNavigation<MainNavigationProp<MainRoutes.Home>>();

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Text>Home Page</Text>

      <Button onPress={() => navigation.navigate(MainRoutes.Orders)}>
        Orders
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});
