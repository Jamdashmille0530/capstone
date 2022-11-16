import React from 'react'
import Test from 'assets/test.jpeg'

export const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src={Test} />
        <span>Just Now</span>
      </div>

      <div className="messageContent">
        <p>hello</p>
        <img src={Test} alt="" />
      </div>
    </div>
  )
}
