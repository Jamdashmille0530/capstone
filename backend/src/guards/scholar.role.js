export const ScholarRole = (req, res, next) => {
  const { role } = req.payload
  if (role === 'SCHOLAR') return next()
  return res.status(403).json({
    message: 'Not a scholar',
  })
}
