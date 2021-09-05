import 'react-native';
import React from 'react';

import { SplashScreen } from '../';

import { render } from '@testing-library/react-native';

describe('Splash Screen', () => {
  it('should render correctly', async () => {
    const { findByText } = render(<SplashScreen />);

    const screen = await findByText(/Growth Supplements/i);

    expect(screen).toBeTruthy();
  });
});
