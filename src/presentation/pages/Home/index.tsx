import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../infra/navigation/RootStackParams';

type HomeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export function HomePage(): JSX.Element {
  const navigation = useNavigation<HomeScreenProp>();
  //TODO: Type Navigation

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Text>Home Page</Text>

      <Button onPress={() => navigation.navigate('Order')}>Order</Button>
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
