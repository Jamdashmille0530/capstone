import React from 'react'
import AttachTest from 'assets/attachtest.png'
import ImageTest from 'assets/imagetest.png'
import io from 'socket.io-client'
import { useEffect, useState } from 'react'
import Messages from './Messages'
import jwt_decode from 'jwt-decode'
import { getMessages, getRoom } from '../../../utils/messages.routes'
import { useCallback } from 'react'
const socket = io('ws://localhost:5001', {
  transports: ['websocket', 'polling'],
})
const Input = () => {
  const [room, setRoom] = useState(null)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState({ data: [], count: 0 })
  const [page, setPage] = useState(0)
  const sendMessage = useCallback(() => {
    const decoded = jwt_decode(localStorage.getItem('accessToken'))
    socket.emit('sendMessage', {
      roomId: room,
      userId: decoded.userId,
      message,
    })
  }, [socket, room, message])
  useEffect(() => {
    getRoom().then((data) => {
      if (!!data) {
        socket.on(data.roomId, (message) => {
          setMessages((d) => ({
            data: [...d.data, message],
            count: d.count + 1,
          }))
        })

        setRoom(data.roomId)
      }
    })
  }, [socket])

  useEffect(() => {
    if (room !== null) {
      getMessages(room, page, 10).then((data) => {
        setMessages(data)
      })
    }
  }, [page, room])

  return (
    <>
      <div className="messages">
        <h1 className="header">Format before chatting </h1>

        <h1>Message:</h1>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {messages.data.map((d) => (
            <p key={d.userId}>{d.message}</p>
          ))}
        </div>
      </div>

      <div className="input">
        <input
          type="text"
          placeholder="Type Something..."
          onChange={(event) => {
            setMessage(event.target.value)
          }}
        />
        <div className="send">
          {/* <img src={AttachTest} alt="" />
        <input type="file" style={{ display: 'none' }} id="file" /> */}
          {/* <label htmlFor="file">
          <img src={ImageTest} alt="" />
        </label> */}
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </>
  )
}
export default Input
