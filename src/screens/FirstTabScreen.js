import React, { Component } from 'react';
import { View, Text, Button} from 'react-native';

class FirstTabScreen extends Component {
  goToPushedScreen = () => {
    this.props.navigator.push({
      screen: 'app.PushedScreen',
      title: 'Pushed Screen'
    })
  };
  
  render() {
    return (
      <View>
        <Button
          title={'Take me there'}
          onPress={this.goToPushedScreen}
        />
        <Text>First</Text>
      </View>
    )
  }
};

export default FirstTabScreen;