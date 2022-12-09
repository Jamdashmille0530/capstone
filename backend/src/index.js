import { prisma } from './utils/db'
import express from 'express'
import cors from 'cors'

import roomRoute from './routes/room.routes'
import userRoute from './routes/users.routes'
import authRoute from './routes/auth.routes'
import calendarRoute from './routes/calendar.routes'
import adminRoute from './routes/admin.routes'
import { io } from './gateways'

const http = require('http')
const app = express()

const server = http.createServer(app)
io.attach(server)
app.use(express.static('public/images'))

app.use(express.json())
app.use(
  cors({
    origin: [
      '*',
      // 'https://capstone-fe-jamdashmille0530.vercel.app',
      // 'https://capstone-4ytyl1cfu-jamdashmille0530.vercel.app',
      // 'https://capstone-fe-git-main-jamdashmille0530.vercel.app',
      // 'https://capstone-fe-wine.vercel.app',
      // 'https://capstone-fe-jamdashmille0530.vercel.app',
    ],
    credentials: true,
  })
)

// Routes
app.use('/api/user', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/calendar', calendarRoute)

app.use('/api/admin', adminRoute)
app.use('/api/room', roomRoute)
// Testing

app.get('/api/healthchecker', (_, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to NodeJs with Prisma and PostgreSQL',
  })
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () =>
  console.log(`🚀 Server ready at: http://localhost:${PORT}`)
)
