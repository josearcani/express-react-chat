import React from 'react';

export const HeaderGroup = () => {
  return (
    <div className="chat-area__header-group">
      <h2>College group</h2>
      <div className="chat-area__group-members">
        <figure>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png"
            alt=""
          />
        </figure>
        <figure>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png"
            alt=""
          />
        </figure>
        <span>+3</span>
      </div>
    </div>
  )
}
