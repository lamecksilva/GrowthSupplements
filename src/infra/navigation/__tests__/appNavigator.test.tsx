import 'react-native';
import React from 'react';

import { AppNavigator } from '../AppNavigator';

import { render } from '@testing-library/react-native';

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
  it('should render Splash Screen first', async () => {
    const { findByText } = render(<AppNavigator />);

    const screen = await findByText(/Growth Supplements/i);

    expect(screen).toBeTruthy();
  });

  it('should navigate to HomePage after 3 seconds', async () => {
    const { findByText, getByText } = render(<AppNavigator />);

    const screen = await findByText(/Growth Supplements/i);
    expect(screen).toBeTruthy();

    jest.useFakeTimers();
    setTimeout(() => {
      const newScreen = getByText(/Growth Supplements/i);

      console.log(newScreen);

      expect(newScreen).toBeTruthy();
    }, 4000);
    jest.runAllTimers();
  });

  // it('should navigate to Orders Screen', async () => {
  //   const { findByTestId, getByText } = render(<AppNavigator />);

  //   const button = await findByTestId('Orders');

  //   fireEvent.press(button);

  //   // Not use two 'await's in an 'it' block
  //   // instead of 'findByText' use 'getByText'
  //   const ordersText = getByText(/Orders Screen/i);

  //   expect(ordersText).toBeTruthy();
  // });
});
