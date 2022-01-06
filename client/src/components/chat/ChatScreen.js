import React from 'react';
import { Header } from './Header';
import { ChatArea } from './ChatArea';
import { ChatDetails } from './ChatDetails';
import { Sidebar } from './Sidebar';

export const ChatScreen = () => {
  return (
    <div className="chat-app">
      <Header />
      <main className="chat__container">
        <Sidebar />
        <ChatArea />
        <ChatDetails />
      </main>
    </div>
  )
}
