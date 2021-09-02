import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';

import { Provider } from 'react-redux';

import { store } from './src/domain/store';
import { AppNavigator } from './src/presentation/AppNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
