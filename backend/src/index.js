import { prisma } from './utils/db'
import express from 'express'
import cors from 'cors'

import userRoute from './routes/users.routes'
import authRoute from './routes/auth.routes'
import calendarRoute from './routes/calendar.routes'
import adminRoute from './routes/admin.routes'
//siguro chat to

const http = require('http')
const { Server } = require('socket.io')


const app = express()

const server = http.createServer(app)


app.use(express.static('public/images'))
app.use(express.json())
app.use(cors({ origin: 'http://localhost:3000', credentials: true }))

// Routes
app.use('/api/user', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/calendar', calendarRoute)

app.use('/api/admin', adminRoute)

// Testing

app.get('/api/healthchecker', (_, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to NodeJs with Prisma and PostgreSQL',
  })
})

const io = new Server(server, {
  cors: {
    origin: '*',
  },
})

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`)

  // this will listen to the event send_message declare in the FE
  socket.on('send_message', (data) => {
    socket.broadcast.emit('receive_message', data)
  })
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () =>
  console.log(`🚀 Server ready at: http://localhost:${PORT}`)
)
