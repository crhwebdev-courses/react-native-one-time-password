import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import axios from 'axios';
import firebase from 'firebase';

const ROOT_URL =
  'https://us-central1-one-time-password-1c34f.cloudfunctions.net';

class SignInForm extends Component {
  state = { phone: '', code: '', error: '' };

  handleSubmit = async () => {
    try {
      let { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, {
        phone: this.state.phone,
        code: this.state.code
      });

      //sign into firebase auth with custom token recieved form above request
      firebase.auth().signInWithCustomToken(data.token);
    } catch (error) {
      this.setState({ error });
      console.log(error);
    }
  };

  render() {
    return (
      <View>
        <View style={{ marginBottom: 10 }}>
          <Text>Phone Number</Text>
          <Input
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
          />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text>Code</Text>
          <Input
            value={this.state.code}
            onChangeText={code => this.setState({ code })}
          />
        </View>

        <Button title="Submit" onPress={this.handleSubmit} />
      </View>
    );
  }
}

export default SignInForm;
