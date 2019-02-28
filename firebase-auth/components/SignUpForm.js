import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL =
  'https://us-central1-one-time-password-1c34f.cloudfunctions.net';

class SignUpForm extends Component {
  state = { phone: '', error: '' };

  // useing es2017 syntax to bind this to this component
  // instead of using this.handleSubmit.bind(this) when passing
  // as callback
  handleSubmit = async () => {
    try {
      await axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone });
      await axios.post(`${ROOT_URL}/requestOneTimePassword`, {
        phone: this.state.phone
      });
    } catch (err) {
      this.setState({ error: err });
    }
  };

  render() {
    return (
      <View>
        <View style={{ marginBottom: 20 }}>
          <Text>Enter Phone Number</Text>
          <Input
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
          />
        </View>

        <Button title="Submit" onPress={this.handleSubmit} />
      </View>
    );
  }
}

export default SignUpForm;
