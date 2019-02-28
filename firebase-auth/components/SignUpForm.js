import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';

class SignUpForm extends Component {
  render() {
    return (
      <View>
        <View style={{ marginBottom: 20 }}>
          <Text>Enter Phone Number</Text>
          <Input />
        </View>

        <Button title="Submit" />
      </View>
    );
  }
}

export default SignUpForm;
