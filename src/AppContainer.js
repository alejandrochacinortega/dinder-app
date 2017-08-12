import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AppContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      store: {},
      theme: null,
    }
  }
  

  render() {
    console.log(' here we are ');
  
    return (
      <View>
        <Text>App container</Text>
      </View>
    )
  }
};

export default AppContainer
