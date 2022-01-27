import React from 'react';

export const ChatEntry = ({ name, uid, online }) => {
  return (
    <div className={`chat__sidebar-entry ${ online && 'online'} `}>
      <figure>
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png"
          alt="chat entry josh"
        />
      </figure>
      <div className="chat__entry-details">
        <h3>{ name }</h3>
        <div className="chat__entry-message">
          <p>{ uid }</p>
          <span>20m</span>
        </div>
      </div>
    </div>
  )
}
