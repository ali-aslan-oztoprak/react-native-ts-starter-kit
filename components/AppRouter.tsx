import React, { useCallback, useContext, useEffect } from 'react';
import useColorScheme from '../hooks/useColorScheme';
import { AuthNavigation, Navigation } from '../navigation';
import { AppContext } from '../context/App';
import { ActivityIndicator, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { EAuth, tokenProperty } from '../context/App/model';
import Colors from '../constants/Colors';

const AppRouter = () => {
  const colorScheme = useColorScheme();
  const { state, dispatch } = useContext(AppContext);
  const getAuthTokenData = useCallback(async () => {
    try {
      dispatch({
        token: '',
        type: EAuth.LOGOUT,
      });
      const token: string | null = await AsyncStorage.getItem(tokenProperty);
      console.log(token);

      if (token !== null) {
        dispatch({
          token,
          type: EAuth.LOGIN,
        });

        return;
      }

      dispatch({
        type: EAuth.LOGOUT,
        token: null,
      });
    } catch {
      dispatch({
        type: EAuth.LOGOUT,
        token: null,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getAuthTokenData().then(() => {});
  }, [getAuthTokenData]);

  return state.authLoading ? (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator size="large" color={Colors.light.tint} />
    </View>
  ) : state.authenticated ? (
    <Navigation colorScheme={colorScheme} />
  ) : (
    <AuthNavigation colorScheme={colorScheme} />
  );
};

export default AppRouter;
