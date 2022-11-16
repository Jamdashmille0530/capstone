import React from 'react'
import AttachTest from 'assets/attachtest.png'
import ImageTest from 'assets/imagetest.png'

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type Something..." />
      <div className="send">
        <img src={AttachTest} alt="" />
        <input type="file" style={{ display: 'none' }} id="file" />
        <label htmlFor="file">
          <img src={ImageTest} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}
export default Input
