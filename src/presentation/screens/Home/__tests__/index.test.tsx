import 'react-native';
import React from 'react';
import { HomePage } from '..';

import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';

describe('Home Page', () => {
  it('should render correctly', async () => {
    const { findByText } = render(
      <NavigationContainer>
        <HomePage />
      </NavigationContainer>,
    );

    const screen = findByText(/Home Page/i);

    expect(screen).toBeTruthy();
  });
});
