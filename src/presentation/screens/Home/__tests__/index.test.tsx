import 'react-native';
import React from 'react';
import { HomeScreen } from '../';

import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';

describe('Home Screen', () => {
  it('should render correctly', async () => {
    const { findByText } = render(
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>,
    );

    const screen = findByText(/Home Screen/i);

    expect(screen).toBeTruthy();
  });
});
