import { Navigation } from 'react-native-navigation';

import FirstTabScreen from './FirstTabScreen';
import SecondTabScreen from './SecondTabScreen';
import PushedScreen from './PushedScreen';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('app.FirstTabScreen', () => FirstTabScreen);
  Navigation.registerComponent('app.SecondTabScreen', () => SecondTabScreen);
  Navigation.registerComponent('app.PushedScreen', () => PushedScreen);
}