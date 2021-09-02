import 'react-native';
import React from 'react';
import { ProfilePage } from '..';

import { render } from '@testing-library/react-native';

describe('Profile Page', () => {
  const { queryByText } = render(<ProfilePage />);

  it('Render text correctly', () => {
    expect(queryByText('Profile Page')).toBeDefined();
  });
});
