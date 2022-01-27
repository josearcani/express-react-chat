import React, { useContext, useState } from 'react'
import { SocketContext } from '../../context/SocketContext';
import { ChatEntry } from './ChatEntry';

export const Sidebar = () => {

  const [chatList, setChatList] = useState([]);
  
  const { online, socket } = useContext(SocketContext);
  // console.log(socket);
  socket.on('connect', () => {
    console.log(socket.id);
  });
  socket.on('disconnect', () => {
    console.log('Socket is offline')
  });

  socket.on('active-users', (users = []) => {
    setChatList(users)
  });
  
  return (
    <aside className="chat__sidebar">
      {
        chatList.map((item, i) => (
          <ChatEntry key={ i } online={ online } { ...item } />
        ))
      }
    </aside>
  )
}
