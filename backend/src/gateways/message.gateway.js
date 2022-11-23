import { Server } from 'socket.io'
import { prisma } from '../utils/db'
import {
  sendMessage,
  joinRoom,
  getMessages,
  getRooms,
} from '../services/message.services'

const io = new Server()

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`)

  // this will listen to the event send_message declare in the FE

  socket.on('sendMessage', ({ roomId, userId, message, image }) => {
    sendMessage(roomId, userId, message, image).then(async () => {
      io.emit(roomId, { roomId, userId: userId, message, image })
      const room = await getRooms(0, 20)
      const all = await getRooms()

      io.emit(`/messages/${roomId}`, { data: room, count: all.length })
    })
  })
})

module.exports = {
  io,
}
