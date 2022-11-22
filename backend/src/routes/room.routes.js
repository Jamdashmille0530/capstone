import express from 'express'
import { getAllMessages, getRoom } from '../controllers/message.controller'
import { isAuth } from '../middlewares'
const router = express.Router()

router.get('/', isAuth, getRoom)
router.get('/:id', isAuth, getAllMessages)

export default router
