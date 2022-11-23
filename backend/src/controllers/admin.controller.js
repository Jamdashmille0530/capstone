import { prisma } from '../utils/db'

export const getUserInfo = async (req, res, next) => {
  try {
    const user = await prisma.user.findMany()
    return res.json({
      status: 'success',
      user,
      message: 'Successfully retrieved user',
    })
  } catch (error) {
    next(error)
  }
}

export const updateRole = async (req, res, next) => {
  try {
    const id = req.params.id
    const { role } = req.body
    await prisma.user.update({ where: { id }, data: { role } })
    return res.json({
      status: 'success',
      message: 'Successfully update user role',
    })
  } catch (error) {
    next(error)
  }
}
