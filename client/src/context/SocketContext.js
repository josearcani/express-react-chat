import React, { useContext, useEffect } from 'react';
import { createContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { useSocket } from '../hooks/useSocket'

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {

  const { socket, online, connectSocket, disconnectSocket } = useSocket('http://localhost:4000');
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user.logged) {
      connectSocket();
    }
  }, [user, connectSocket]);

  useEffect(() => {
    if (!user.logged) {
      disconnectSocket();
    }
  }, [user, disconnectSocket]);


  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  )
}