import { createContext, useCallback } from 'react';
import { useReducerAsync } from 'use-reducer-async';
import { authReducer } from './authReducer';
import { asyncActionHandlers, login, logout } from '../actions/auth';
import { fetchWithToken } from '../helpers/fetch';

export const AuthContext = createContext();


const initialState = {
    uid: null,
    checking: true,
    logged: false,
    name: null,
    email: null,
};

export const AuthProvider = ({ children }) => {

  const [user, dispatch] = useReducerAsync(authReducer, initialState, asyncActionHandlers);

  const verifyToken = useCallback(
    async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        dispatch(logout());
        return false;
      }

      const resp = await fetchWithToken('auth');
      if (resp?.user) {
        localStorage.setItem('token', resp.token );
        const { user } = resp;
        dispatch(login(user));
        return true
      } else {
        dispatch(logout());
        return false
      }
    },[ dispatch ])

  return (
    <AuthContext.Provider value={{
      user,
      dispatch,
      verifyToken,
    }}>
        { children }
    </AuthContext.Provider>
)
}