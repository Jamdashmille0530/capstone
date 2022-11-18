import React from 'react'
import AttachTest from 'assets/attachtest.png'
import ImageTest from 'assets/imagetest.png'
import io from 'socket.io-client'
import { useEffect, useState } from 'react'
import Messages from './Messages'
const socket = io.connect("http://localhost:5000")
const Input = () => {
  const [message, setMessage] = useState('')
  const [messageReceived, setMessageReceived] = useState ("")
  const sendMessage =() => {
    socket.emit("send_message", {message})
  };
  useEffect(()=>{
socket.on("receive_message", (data)=>{
  setMessageReceived(data.message)

})
  }, [socket])
  return (
    <>
      <div className="messages">
        <h1 className="header">Format before chatting </h1>
        
        <h1>Message:</h1>
        {messageReceived}
        
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
