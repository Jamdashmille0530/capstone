export const AdminRole = (req, res, next) => {
  const { role } = req.payload
  if (role === 'ADMIN') return next()
  return res.status(403).json({
    message: 'Not an admin',
  })
}
