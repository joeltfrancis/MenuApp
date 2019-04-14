import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import Button from "../components/Button";
import FormTextInput from "../components/FormTextInput";
import Menulogo from "../assets/images/logo.png";
import colors from "../config/colors";
import strings from "../config/strings";

interface State {
  email: string;
  password: string;
}

class LoginScreen extends React.Component<{}, State> {
  readonly state: State = {
    email: "",
    password: ""
  };

  handleEmailChange = (email: string) => {
    this.setState({ email: email });
  };

  handlePasswordChange = (password: string) => {
    this.setState({ password: password });
  };

  handleLoginPress = () => {
    console.log("Login button pressed");
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={Menulogo} style={styles.logo} />
        <View style={styles.form}>
          <FormTextInput
            value={this.state.email}
            onChangeText={this.handleEmailChange}
            placeholder={strings.EMAIL_PLACEHOLDER}
          />
          <FormTextInput
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
            placeholder={strings.PASSWORD_PLACEHOLDER}
          />
          <Button
            label={strings.LOGIN}
            onPress={this.handleLoginPress}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.Orange,
    alignItems: "center",
    justifyContent: "space-between"
  },
  logo: {
    flex: 1,
    width: "80%",
    resizeMode: "contain",
    alignSelf: "center"
  },
  form: {
    flex: 1,
    justifyContent: "center",
    width: "70%"
  }
});

export default LoginScreen;