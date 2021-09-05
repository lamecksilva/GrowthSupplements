import 'react-native';
import React from 'react';
import { ProfileScreen } from '../';

import { render } from '@testing-library/react-native';

describe('Profile Screen', () => {
  it('should render correctly', async () => {
    const { findByText } = render(<ProfileScreen />);

    const screen = await findByText(/Profile Screen/i);

    expect(screen).toBeTruthy();
  });
});
