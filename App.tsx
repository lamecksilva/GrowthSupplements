import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';

import { Provider } from 'react-redux';

import { store } from './src/domain/store';
import { Routes } from './src/presentation/Routes';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Routes />
    </Provider>
  );
};

export default App;
