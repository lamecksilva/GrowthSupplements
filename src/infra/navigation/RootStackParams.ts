import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export enum MainRoutes {
  Splash = 'Splash',
  Loading = 'Loading',
  Home = 'Home',
  Orders = 'Orders',
  Profile = 'Profile',
}

export type MainStackParamList = {
  [MainRoutes.Splash]: undefined;
  [MainRoutes.Loading]: undefined;
  [MainRoutes.Home]: { update: boolean } | undefined; // just an example, "update" will later be used for version checks
  [MainRoutes.Orders]: undefined;
  [MainRoutes.Profile]: undefined;
};

export type MainNavigationProp<
  RouteName extends keyof MainStackParamList = MainRoutes,
> = NativeStackNavigationProp<MainStackParamList, RouteName>;
