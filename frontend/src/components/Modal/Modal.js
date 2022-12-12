import React from 'react'

function Modal() {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="title">
            <h1> Are you sure you want to Approve the student?</h1>
        </div>
        <div className="body"></div>
        <div className="footer">
            <button>Cancel</button>
            <button>Continue </button>
        </div>
      </div>
    </div>
  )
}

export default Modal