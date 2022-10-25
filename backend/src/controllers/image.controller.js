import { getImageLocation } from '../services/upload.services'
import { findUserById, updateUserData } from '../services/user.services'

const requiredColumns = [
  'idPicture',
  'gradeSlip',
  'eslip',
  'ncae',
  'ebill',
  'wbill',
  'tbill',
  'bcert',
  'indigency',
  'autobiography',
  'pantawidId',
  'sketchAdress',
]

export const insertImage = async (req, res) => {
  if (!requiredColumns.includes(req.params.column))
    return res.status(404).json({ message: 'Not Found' })
  const { userId } = req.payload
  const data = getImageLocation(req)
  const updated = await updateUserData(userId, { [req.params.column]: data })
  return res.json(updated)
}

export const getImage = async (req, res) => {
  if (!requiredColumns.includes(req.params.column))
    return res.status(404).json({ message: 'Not Found' })
  const data = await findUserById(req.params.id)
  data[req.params.column]
  res.sendFile(data[req.params.column], {
    root: '.',
  })
}
