import jwtDecode from 'jwt-decode'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { getRoom } from '../../utils/messages.routes'
import { socket } from '../../utils/socket'
import ChatOne from './Components/ChatOne'

import ChatSidebar from './Components/ChatSidebar'
import './style.scss'

const ChatContainer = ({ children }) => {
  return (
    <div className="ChatHome">
      <div className="container">{children}</div>
    </div>
  )
}

const ChatHome = () => {
  const decoded = localStorage.getItem('accessToken')
    ? jwtDecode(localStorage.getItem('accessToken'))
    : null
  const [userId, setUserId] = useState(
    decoded?.role !== 'ADMIN' ? decoded?.userId : null
  )
  const [room, setRoom] = useState(null)

  if (!decoded) return null

  useEffect(() => {
    socket.off(room?.roomId)
    getRoom(userId).then((data) => {
      if (!!data) {
        setRoom(data)
      }
    })
  }, [socket, userId])

  return (
    <ChatContainer>
      {decoded.role === 'ADMIN' && (
        <ChatSidebar onClick={(v) => setUserId(v)} room={room} />
      )}
      <ChatOne room={room} />
    </ChatContainer>
  )
}
export default ChatHome
