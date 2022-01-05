import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import Input from '../components/Input';
import Button from '../components/Button';

const LoginScreen = props => {
  console.log(props);
  return (
    <View style={styles.container}>
      <Header>Login</Header>
      <View style={styles.formLogin}>
        <View style={styles.loginContainer}>
          <Text style={styles.lable}>User name</Text>
          <Input secureTextEntry={true} />
          <Text style={styles.lable}>Password</Text>
          <Input />
          <View style={styles.control}>
            <View style={styles.choices}>
              <View style={styles.forgotPass}>
                <Text style={styles.fontchoices}>Forgot password?</Text>
              </View>
              <View style={styles.newAcc}>
                <Text style={styles.fontchoices}>Create new account</Text>
              </View>
            </View>
            <View style={styles.button}>
              <Button onPress={() => {
                props.navigation.navigate('Trang chủ')
              }}>Login</Button>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fontchoices: {
    fontSize: 18
  },
  forgotPass: {
    width: '50%',
    height: 20
  },
  newAcc: {
    width: '50%',
    height: 20,
    alignItems: 'flex-end'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loginContainer: {
    width: '80%'
  },
  control: {
    alignItems: 'center'
  },
  choices: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'space-between'
  },
  button: {
    width: 250,
    height: 60
  },
  lable: {
    fontSize: 18,
    marginTop: 20
  },
  formLogin: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default LoginScreen;
