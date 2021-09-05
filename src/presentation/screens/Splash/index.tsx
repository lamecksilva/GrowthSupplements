import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function SplashScreen(): JSX.Element {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Text>Growth Supplements</Text>

      <Text style={styles.developedByText}>Developed by Lameck Santos</Text>
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
  developedByText: {
    marginTop: 40,
  },
});
