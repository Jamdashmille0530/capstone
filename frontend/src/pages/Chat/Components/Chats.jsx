import React from 'react'
import Test from 'assets/test.jpeg'

export const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img src={Test} />
        <div className="userChatInfo">
          <span>Doyoung</span>
          <p>What's Up!</p>
        </div>
      </div>

      <div className="userChat">
        <img src={Test} />
        <div className="userChatInfo">
          <span>Renjun</span>
          <p>What's Up!</p>
        </div>
      </div>

      <div className="userChat">
        <img src={Test} />
        <div className="userChatInfo">
          <span>Mark</span>
          <p>What's Up!</p>
        </div>
      </div>
    </div>
  )
}
