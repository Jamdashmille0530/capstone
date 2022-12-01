import React from 'react'
import AttachTest from 'assets/attachtest.png'
import ImageTest from 'assets/imagetest.png'

import { useState } from 'react'

import jwtDecode from 'jwt-decode'

import { useCallback } from 'react'
import { socket } from '../../../utils/socket'

const Input = ({ roomId }) => {
  const [message, setMessage] = useState('')

  const sendMessage = useCallback(() => {
    const decoded = jwtDecode(localStorage.getItem('accessToken') ?? '')
    socket.emit('sendMessage', {
      roomId,
      userId: decoded.userId,
      message,
    })
  }, [socket, roomId, message])

  return (
    <div className="input">
      <input
        type="text"
        placeholder="Type Something..."
        onChange={(event) => {
          setMessage(event.target.value)
        }}
      />
      <div className="send">
        {/* <img src={AttachTest} alt="" /> */}
        {/* <input type="file" style={{ display: 'none' }} id="file" />
        <label htmlFor="file">
          <img src={ImageTest} alt="" />
        </label> */}
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  )
}
export default Input
