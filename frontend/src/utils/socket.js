import io from 'socket.io-client'
export const socket = io('ws://capstone-2bvms2n4d-jamdashmille0530.vercel.app', {
  transports: ['websocket', 'polling'],
})
