import { findUserById } from '../services/user.services'

export const validateParamUserId = async (req, res, next) => {
  if (!req.params.id) return res.status(404).json({ message: 'NOT FOUND' })
  try {
    const data = await findUserById(req.params.id)

    if (!data) return res.status(404).json({ message: 'NOT FOUND' })

    req.user = data
    return next()
  } catch {
    return res.status(500).json({ message: 'Internal Error' })
  }
}

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

export const validateParamColumns = async (req, res, next) => {
  if (!requiredColumns.includes(req.params.column))
    return res.status(404).json({ message: 'Not Found' })
  next()
}
