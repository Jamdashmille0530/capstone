import React from 'react'
import ChatOne from './Components/ChatOne'
import ChatSidebar from './Components/ChatSidebar'
import './style.scss'

const ChatHome = () => {
  return (
    <div className="ChatHome">
      <div className="container">
        {/* <ChatSidebar /> */}
        <ChatOne />
      </div>
    </div>
  )
}
export default ChatHome
