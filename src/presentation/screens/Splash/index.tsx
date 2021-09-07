import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  MainNavigationProp,
  MainRoutes,
} from '@infra/navigation/RootStackParams';

export function SplashScreen(): JSX.Element {
  const navigation = useNavigation<MainNavigationProp<MainRoutes.Splash>>();

  useEffect(() => {
    const timer = setTimeout(() => navigation.navigate(MainRoutes.Home), 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [navigation]);

  return (
    // <TouchableOpacity onPress={() => navigation.navigate(MainRoutes.Home)}>
    <SafeAreaView style={styles.safeAreaView}>
      <Text>Growth Supplements</Text>

      <Text style={styles.developedByText}>Developed by Lameck Santos</Text>
    </SafeAreaView>
    // </TouchableOpacity>
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
