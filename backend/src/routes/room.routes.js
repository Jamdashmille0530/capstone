import express from 'express'
import {
  getAllMessages,
  getRoom,
  getUsers,
} from '../controllers/message.controller'
import { AdminRole, ScholarRole } from '../guards'

import { isAuth } from '../middlewares'
const router = express.Router()

router.get('/:userId', isAuth, getRoom)
router.get('/messages/:id', isAuth, getAllMessages)
router.get('/', isAuth, AdminRole, getUsers)

export default router
