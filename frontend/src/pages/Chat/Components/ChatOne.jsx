import React from 'react'
import Messages from './Messages'
import Input from './Input'
import { useState, useEffect } from 'react'

const ChatOne = ({ room }) => {
  return (
    <div className="chatone">
      <div className="chatInfo">
        <span>LAO FOUNDATION</span>
      </div>
      {!!room && (
        <>
          <Messages room={room} />
          <Input roomId={room.roomId} />
        </>
      )}
    </div>
  )
}
export default ChatOne
