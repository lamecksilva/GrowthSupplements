import React from 'react';

import { render } from '@testing-library/react-native';

import { AppNavigator } from '../presentation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';

describe('App Navigator', () => {
  it('Should render HomePage first', async () => {
    const component = (
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    );

    const { findByText } = render(component);

    const homeText = await findByText(/Home/i);

    expect(homeText).toBeTruthy();
  });
});
