import React, { useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  EAuth,
  IAction,
  IAppState,
  IContext,
  IAppProvider,
  tokenProperty,
} from './model';

const setAuthToken: (token: string | null) => Promise<void> = async (
  token: string | null,
) => {
  try {
    if (token === null) {
      await AsyncStorage.removeItem(tokenProperty);
      return;
    }

    await AsyncStorage.setItem(tokenProperty, token);
  } catch (e) {}
};

const initialState: IContext<IAppState> = {
  state: {
    authenticated: false,
    authLoading: true,
  },
  dispatch: () => null,
};

const AppContext = React.createContext(initialState);
const reducer = (state: IAppState, action: IAction<IAppState>): IAppState => {
  switch (action.type) {
    case EAuth.LOGIN:
      setAuthToken(action.token);
      return {
        ...state,
        authenticated: true,
        authLoading: false,
      };

    case EAuth.LOGOUT:
      setAuthToken('');
      return {
        ...state,
        authenticated: false,
        authLoading: false,
      };

    default:
      return state;
  }
};

const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState.state);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
