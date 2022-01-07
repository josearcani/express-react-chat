import React, { useReducer } from 'react';
import { AppRouter } from './routers/AppRouter';

import { authReducer } from './auth/authReducer';
import { AuthContext } from './auth/authContext';


const init = () => ({ logged: false });

export const ChatApp = () => {

  const [user, dispatch] = useReducer(authReducer, {}, init)

  return (
    <AuthContext.Provider value={{
      user,
      dispatch
    }}>
      <AppRouter />
    </AuthContext.Provider>
  )
}
