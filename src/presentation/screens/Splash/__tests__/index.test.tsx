import 'react-native';
import React from 'react';

import { SplashScreen } from '../';

import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';

describe('Splash Screen', () => {
  it('should render correctly', async () => {
    const { findByText } = render(
      <NavigationContainer>
        <SplashScreen />
      </NavigationContainer>,
    );

    const screen = await findByText(/Growth Supplements/i);

    expect(screen).toBeTruthy();
  });
});
