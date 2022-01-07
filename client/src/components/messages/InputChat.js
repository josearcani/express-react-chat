import React from 'react';
import { ReactComponent as VideoCall } from '../../assets/video.svg';
import { ReactComponent as UploadPic } from '../../assets/picture.svg';
import { ReactComponent as PlusIcon } from '../../assets/plus.svg';
import { ReactComponent as EmojiPic } from '../../assets/emoji.svg';
import { ReactComponent as Thumb } from '../../assets/thumb.svg';


export const InputChat = () => {
  return (
    <div className="chat-area__input">
      <div className="chat-input__icons">
        <PlusIcon />
        <VideoCall />
        <UploadPic />
        <EmojiPic />
      </div>
      <input
        type="text"
        placeholder="Type something"
        name="input"
        className="chat-input__input input"
      />
      <div className="chat-input__icons">
        <Thumb />
      </div>
    </div>
  )
}
