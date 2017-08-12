import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import { Settings } from './../../stores';

const settings = new Settings();


class SplashScreen extends Component {
  constructor (props) {
    super(props);
  }
  
  goToFirstTabScreen = () => {
    this.props.navigator.push({
      screen: 'app.FirstTabScreen',
      title: 'Second Tab'
    })
  }
  
  componentDidMount () {
    // const { stores } = this.props;
    setTimeout(() => {
      this.goToFirstTabScreen()
    }, settings.SplashTime)
  }
  
  render() {
    console.log(' PROPS ', this.props);
    
    return (
        <Image
          style={{flex: 1, width: null, height: null}}
          source={settings.SplashImg}
        />
    )
  }
}

export default SplashScreen