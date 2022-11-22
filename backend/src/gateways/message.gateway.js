import { Server } from 'socket.io'
import { prisma } from '../utils/db'
import { sendMessage, joinRoom } from '../services/message.services'

const io = new Server()

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`)

  // this will listen to the event send_message declare in the FE

  socket.on('sendMessage', ({ roomId, userId, message, image }) => {
    sendMessage(roomId, userId, message, image).then(() =>
      io.emit(roomId, { id: userId, message, image })
    )
  })
})

module.exports = {
  io,
}
