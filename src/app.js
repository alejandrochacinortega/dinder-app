import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';

registerScreens(); // this is where you register all of your src's screens


// start the src
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Splash',
      screen: 'app.SplashScreen', // this is a registered name for a screen
      icon: require('./../img/home.png'),
      selectedIcon: require('./../img/home.png'), // iOS only
      title: 'Splash'
    },
    {
      label: 'Second Tab',
      screen: 'app.FirstTabScreen', // this is a registered name for a screen
      icon: require('./../img/home.png'),
      selectedIcon: require('./../img/home.png'), // iOS only
      title: 'Screen One'
    },
    {
      label: 'Third',
      screen: 'app.SecondTabScreen',
      icon: require('./../img/star.png'),
      selectedIcon: require('./../img/star.png'), // iOS only
      title: 'Screen Two'
    }
  ]
});