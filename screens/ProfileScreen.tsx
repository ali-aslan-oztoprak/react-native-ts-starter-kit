import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { useContext } from 'react';
import { AppContext } from '../context/App';
import { EAuth } from '../context/App/model';
import Colors from '../constants/Colors';

export default function ProfileScreen() {
  const { dispatch } = useContext(AppContext);
  const logout = () => {
    dispatch({
      type: EAuth.LOGOUT,
      token: null,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/ProfileScreen.tsx" />
      <Text style={{color: Colors.light.tint}} onPress={logout}>Logout</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
