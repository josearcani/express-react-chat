import { createContext } from 'react';
import { useReducerAsync } from 'use-reducer-async';
import { authReducer } from './authReducer';
import { asyncActionHandlers } from '../actions/auth';

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

  return (
    <AuthContext.Provider value={{
      user,
      dispatch,
    }}>
        { children }
    </AuthContext.Provider>
)
}