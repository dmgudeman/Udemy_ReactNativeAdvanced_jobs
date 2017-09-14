import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

class ReviewScreen extends Component {
  // The router reads this first
  static navigationOptions = {
    title: 'Review Jobs',
    headerRight: <Button 
      title="Settings"
      onPress={ () => console.log('Hi there') }
    />
  }
  

  render() {
    return (
      <View>
        <Text> ReviewScreen </Text>
        <Text> ReviewScreen </Text>
        <Text> ReviewScreen </Text>
        <Text> ReviewScreen </Text>
        <Text> ReviewScreen </Text>
        <Text> ReviewScreen </Text>
      </View>
    );
  }
}

export default ReviewScreen;