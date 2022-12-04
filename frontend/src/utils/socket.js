import io from 'socket.io-client'
export const socket = io(
  'wss://capstone-be-git-main-jamdashmille0530.vercel.app',
  {
    transports: ['websocket', 'polling'],
  }
)
