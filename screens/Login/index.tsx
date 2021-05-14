import React, { useContext, useEffect, useState } from 'react';
import {
  TextInput,
  Button,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import { AppContext } from '../../context/App';
import { EAuth } from '../../context/App/model';
import { Text, View } from '../../components/Themed';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const { state, dispatch } = useContext(AppContext);
  const handleLogin = async () => {
    setLoading(true);
    try {
      // Send a login request here.
      dispatch({
        type: EAuth.LOGIN,
        token: 'example-token',
      });
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {}, [state.authenticated]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Template</Text>
      <Text>Email</Text>
      <TextInput
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
      />
      <Text>Password</Text>
      <TextInput
        value={password}
        onChangeText={text => setPassword(text)}
        style={styles.input}
      />
      <Button title="Sign In" onPress={handleLogin} />
      <Text style={styles.forgotPassword}>Forgotten Password?</Text>
      <Text style={styles.subTitle}>Sign Up</Text>
      <SafeAreaView
        style={{
          flexDirection: 'row',
          marginTop: 50,
          justifyContent: 'center',
        }}>
        <Text style={styles.signUpButton}>Google</Text>
        <Text style={styles.signUpButton}>E-Mail</Text>
      </SafeAreaView>
      {loading && (
        <SafeAreaView style={styles.loading}>
          <ActivityIndicator color="lightblue" size="large" />
        </SafeAreaView>
      )}
    </View>
  );
};

export default Login;
