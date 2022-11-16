import React from 'react'
import CameraTest from 'assets/cameratest.png'
import AddTest from 'assets/addtest.png'
import MoreTest from 'assets/moretest.png'
import Messages from './Messages'
import Input from './Input'

const ChatOne = () => {
  return (
    <div className="chatone">
      <div className="chatInfo">
        <span>Doyoung</span>
        <div className="chatIcons">
          <img src={CameraTest} /> <img src={AddTest} /> <img src={MoreTest} />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}
export default ChatOne
