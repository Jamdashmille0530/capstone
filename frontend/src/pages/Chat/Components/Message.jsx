import React from 'react'
export const Message = ({ message, isReply }) => {
  return !isReply ? (
    <div className="message owner">
      <div className=" bg-green-300 p-5 rounded-2xl rounded-tl-none">
        {!!message.img && <img src={message.img} alt="" />}
        <p>{message.content}</p>
      </div>
    </div>
  ) : (
    <div
      className="messageContent"
      style={{ width: 'min-content', maxWidth: '50%', marginTop: 8 }}
    >
      {!!message.img && <img src={message.img} style={{ marginBottom: 8 }} />}
      <div className="place-self-start text-left  bg-white  p-5 rounded-2xl rounded-tl-none">
        {message.content}
      </div>
    </div>
  )
}
