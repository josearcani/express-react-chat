import React from 'react';

export const ChatEntry = () => {
  return (
    <div className="chat__sidebar-entry online">
      <figure>
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png"
          alt="chat entry josh"
        />
      </figure>
      <div className="chat__entry-details">
        <h3>Madison Jones</h3>
        <div className="chat__entry-message">
          <p>Whats upp, it is freeze</p>
          <span>20m</span>
        </div>
      </div>
    </div>
  )
}
