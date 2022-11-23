import React from 'react'
import { useState, useEffect } from 'react'
import { getMessages } from '../../../utils/messages.routes'
import { Message } from './Message'
import { socket } from '../../../utils/socket'
import jwtDecode from 'jwt-decode'

const Messages = ({ room }) => {
  const [page, setPage] = useState(0)
  const [messages, setMessages] = useState({ data: [], count: 0 })
  const decoded = jwtDecode(localStorage.getItem('accessToken'))
  const currentIsAdmin = decoded.role === 'ADMIN'

  useEffect(() => {
    if (room !== null) {
      socket.on(room.roomId, (message) => {
        setMessages((d) => ({
          data: [...d.data, message],
          count: d.count + 1,
        }))
      })

      getMessages(room.roomId, page, 10).then((data) => {
        setMessages(data)
      })
    }
  }, [page, room, socket])

  return (
    <div className="messages">
      {messages?.data.map((data, i) => (
        <Message
          key={i}
          isReply={
            currentIsAdmin
              ? data.userId === room.userId
              : data.userId !== decoded.userId
          }
          message={{ content: data.message, img: data.image }}
        />
      ))}
    </div>
  )
}
export default Messages
