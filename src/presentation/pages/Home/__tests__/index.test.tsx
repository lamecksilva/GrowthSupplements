import 'react-native';
import React from 'react';
import { HomePage } from '..';

import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';

describe('Home Page', () => {
  const { queryByText } = render(
    <NavigationContainer>
      <HomePage />
    </NavigationContainer>,
  );

  it('Render text correctly', () => {
    expect(queryByText('Home Page')).toBeDefined();
  });
});
