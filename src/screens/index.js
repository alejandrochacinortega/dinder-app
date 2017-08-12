import { Navigation } from 'react-native-navigation';

import SplashScreen from './SplashScreen/SplashScreen';
import FirstTabScreen from './FirstTabScreen';
import SecondTabScreen from './SecondTabScreen';
import PushedScreen from './PushedScreen';

// register all screens of the src (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('app.SplashScreen', () => SplashScreen);
  Navigation.registerComponent('app.FirstTabScreen', () => FirstTabScreen);
  Navigation.registerComponent('app.SecondTabScreen', () => SecondTabScreen);
  Navigation.registerComponent('app.PushedScreen', () => PushedScreen);
}