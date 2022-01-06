import React from 'react';
import { HeaderGroup } from '../messages/HeaderGroup';
import { InputChat } from '../messages/InputChat';
import { MessageChat } from '../messages/MessageChat';

export const ChatArea = () => {
  return (
    <section className="chat-area__container">
      <HeaderGroup />
      <MessageChat />
      <InputChat />
    </section>
  )
}
