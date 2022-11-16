import React from 'react'
import ChatNavbar from './ChatNavbar'
import { Chats } from './Chats'
import { Search } from './Search'

const ChatSidebar = () => {
  return (
    <div className="chatsidebar">
      <ChatNavbar />
      <Search />
      <Chats />
    </div>
  )
}
export default ChatSidebar
