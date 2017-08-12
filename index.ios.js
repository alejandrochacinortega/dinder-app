import { Navigation } from 'react-native-navigation';

import { registerScreens } from './app/screens';

registerScreens(); // this is where you register all of your app's screens

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'One',
      screen: 'app.FirstTabScreen', // this is a registered name for a screen
      icon: require('./img/icon2.png'),
      selectedIcon: require('./img/icon2.png'), // iOS only
      title: 'Screen One'
    },
    {
      label: 'Two',
      screen: 'app.SecondTabScreen',
      icon: require('./img/icon2.png'),
      selectedIcon: require('./img/icon2.png'), // iOS only
      title: 'Screen Two'
    }
  ]
});