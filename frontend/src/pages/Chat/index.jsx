import io from 'socket.io-client'
import React from 'react'
import { useEffect, useState } from 'react'

const socket = io.connect('http://localhost:5000')

function Chat() {
  const [message, setMessage] = useState('')
  const [messageReceived, setMessageReceived] = useState("")
  const sendMessage = () => {
    socket.emit('send_message', { message })
  }
  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessageReceived(data.message);
    })
  }, [socket])
  return (
    <>
      <div className="m-auto box-border border-4 border-green-900 w-auto ml-2 mr-2  p-5 mt-5 bg-gray-300">
        <p className="font-bold text-l flex justify-center mb-2">
          Chat with us
        </p>
        <h1>Message:</h1>
        {messageReceived}
        <div className="max-w-xl mx-auto space-y-12 grid grid-cols-1">
          <div>
            <form className="my-3">
              <div className="flex justify-center pl-3 py-2 px-3 bg-gray-50 rounded-lg dark:bg-gray-700">
                <input
                  placeholder="Message..."
                  onChange={(event) => {
                    setMessage(event.target.value)
                  }}
                />
                <button
                  className="inline-flex justify-center pl-4 p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
                  onClick={sendMessage}
                >
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 rotate-90"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                  </svg>
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* <div className="m-auto box-border border-4 border-green-900 w-auto ml-2 mr-2  p-5 mt-5 bg-gray-300">
        <p className="font-bold text-l flex justify-center mb-2">
          Chat with us
        </p>
        <div className="max-w-xl mx-auto space-y-12 grid grid-cols-1">
          <div className="place-self-start">
            <div className="bg-white p-5 rounded-2xl rounded-tl-none">
              Hey, there! It's been a while!
            </div>
          </div>

          <div className="place-self-start text-left">
            <div className="bg-white p-5 rounded-2xl rounded-tl-none">
              Wanted to know if you wanted to get lunch sometime this week?
            </div>
          </div>

          <div className="place-self-start text-left">
            <div className="bg-white p-5 rounded-2xl rounded-tl-none">
              Or next week. I'm also free during the evenings next week.
            </div>
          </div>

          <div className="place-self-end text-right">
            <div className="bg-green-50 text-green-900 p-5 rounded-2xl rounded-tr-none">
              Oops! Sorry for the late response!
            </div>
          </div>

          <div className="place-self-end text-right">
            <div className="bg-green-50 text-green-900 p-5 rounded-2xl rounded-tr-none">
              I'd love to get lunch sometime next week!
            </div>
          </div>

          <div className="place-self-end text-right">
            <div className="bg-green-50 text-green-900 p-5 rounded-2xl rounded-tr-none">
              Do you have any places in mind where you'd want to meet?
            </div>
          </div>
        </div>
        <form className="my-3">
          <label for="chat" className="sr-only">
            Your message
          </label>
          <div className="flex items-center py-2 px-3 bg-gray-50 rounded-lg dark:bg-gray-700">
            <textarea
              id="chat"
              rows="1"
              className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your message..."
            ></textarea>
            <button
              type="submit"
              className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6 rotate-90"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
              </svg>
              <span className="sr-only">Send message</span>
            </button>
          </div>
        </form>
      </div> */}
    </>
  )
}
export default Chat
