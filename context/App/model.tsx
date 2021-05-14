import React from 'react';
export enum EAuth {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
};

export const tokenProperty: string = 'authToken';

export interface IAppState {
  authenticated: boolean;
  authLoading: boolean;
}

export interface IAppProvider {
  children: any;
}

export interface IAction<T> {
  type: string;
  data?: T;
  token: string | null;
}

export interface IContext<T> {
  state: T;
  dispatch: React.Dispatch<IAction<T>>;
}
