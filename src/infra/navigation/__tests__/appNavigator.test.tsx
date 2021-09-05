import React from 'react';

import { fireEvent, render } from '@testing-library/react-native';

import { AppNavigator } from '../AppNavigator';

// Mock useNavigation hooks
const mockedDispatch = jest.fn();
jest.mock('@react-navigation/native-stack', () => {
  const actualNav = jest.requireActual('@react-navigation/native-stack');

  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: mockedDispatch,
    }),
  };
});

describe('App Navigator', () => {
  it('should render HomeScreen first', async () => {
    const { findByText } = render(<AppNavigator />);

    const homeText = await findByText(/Home/i);

    expect(homeText).toBeTruthy();
  });

  it('should navigate to Orders Screen', async () => {
    const { findByTestId, getByText } = render(<AppNavigator />);

    const button = await findByTestId('Orders');

    fireEvent.press(button);

    // Not use two 'await's in an 'it' block
    // instead of 'findByText' use 'getByText'
    const ordersText = getByText(/Orders Screen/i);

    expect(ordersText).toBeTruthy();
  });
});
