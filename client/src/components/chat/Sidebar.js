import React, { useContext } from 'react'
import { SocketContext } from '../../context/SocketContext';
import { ChatEntry } from './ChatEntry';

export const Sidebar = () => {

  const { socket } = useContext(SocketContext);

  socket.on('active-users', (users) => {
    console.log(users);
  })

  const chatList = [1,2,3,4,5,6,7,8];

  return (
    <aside className="chat__sidebar">
      {
        chatList.map((item, i) => (
          <ChatEntry key={ i } { ...item } />
        ))
      }
    </aside>
  )
}
