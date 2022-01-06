import React from 'react'
import { ChatEntry } from './ChatEntry';

export const Sidebar = () => {

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
