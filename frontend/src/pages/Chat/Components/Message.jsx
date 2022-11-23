import React from 'react'
export const Message = ({ message, isReply }) => {
  return !isReply ? (
    <div className="message owner">
      <div className="messageContent">
        {!!message.img && <img src={message.img} alt="" />}
        <p>{message.content}</p>
      </div>
    </div>
  ) : (
    <div
      className="place-self-start text-left"
      style={{ width: 'min-content', maxWidth: '50%', marginTop: 8 }}
    >
      {!!message.img && <img src={message.img} style={{ marginBottom: 8 }} />}
      <div className="bg-white p-5 rounded-2xl rounded-tl-none">
        {message.content}
      </div>
    </div>
  )
}
