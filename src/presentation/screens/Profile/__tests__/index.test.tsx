import 'react-native';
import React from 'react';
import { ProfilePage } from '..';

import { render } from '@testing-library/react-native';

describe('Profile Page', () => {
  it('should render correctly', async () => {
    const { findByText } = render(<ProfilePage />);

    const screen = await findByText(/Profile Page/i);

    expect(screen).toBeTruthy();
  });
});
