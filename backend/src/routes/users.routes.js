import express from 'express'
import {
  me,
  getUser,
  getAllUser,
  updateUser,
  getAllUserWithoutPass,
  createUser,
} from '../controllers/user.controller'
import { isAuth } from '../middlewares'
import { uploadImg, userFile } from '../services/upload.services'
import { insertImage, getImage } from '../controllers/image.controller'
import { validateParamColumns, validateParamUserId } from '../pipes'

const router = express.Router()

// router.post('/create', createUser)
// router.get("/:id", getUser);
// router.get("/", getAllUser);
router.get('/me', isAuth, me)
router.put('/updateUser', updateUser)
router.get('/getAllUserWithoutPass', getAllUserWithoutPass)

/**
 * User a
 */
router.put(
  '/image/:column',
  [validateParamColumns, isAuth, userFile, uploadImg],
  insertImage
)

/**
 * I suggest to use admin and user auth to restrict access to this route.
 */
router.get(
  '/:id/image/:column',
  [validateParamUserId, validateParamColumns],
  getImage
)

export default router
