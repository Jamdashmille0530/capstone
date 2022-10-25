import { getImageLocation } from '../services/upload.services'
import { findUserById, updateUserData } from '../services/user.services'

export const insertImage = async (req, res) => {
  const { userId } = req.payload
  const data = getImageLocation(req)
  const updated = await updateUserData(userId, { [req.params.column]: data })
  return res.json(updated)
}

export const getImage = async (req, res) => {
  const data = await findUserById(req.params.id)
  data[req.params.column]
  res.sendFile(data[req.params.column], {
    root: '.',
  })
}
