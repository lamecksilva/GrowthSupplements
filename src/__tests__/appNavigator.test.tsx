import React from 'react';

import { render } from '@testing-library/react-native';

import { AppNavigator } from '../infra/navigation/AppNavigator';

describe('App Navigator', () => {
  it('Should render HomePage first', async () => {
    const { findByText } = render(<AppNavigator />);

    const homeText = await findByText(/Home/i);

    expect(homeText).toBeTruthy();
  });
});
