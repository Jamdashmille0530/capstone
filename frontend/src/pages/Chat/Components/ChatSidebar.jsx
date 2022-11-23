import React from 'react'

import ChatNavbar from './ChatNavbar'
import { Chats } from './Chats'
import { Search } from './Search'

const ChatSidebar = ({ onClick, room }) => {
  return (
    <div className="chatsidebar">
      <Search />
      <Chats onClick={(v) => onClick?.(v)} room={room} />
    </div>
  )
}
export default ChatSidebar
