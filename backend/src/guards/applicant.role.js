export const ApplicantRole = (req, res, next) => {
  const { role } = req.payload
  if (role === 'APPLICANT') return next()
  return res.status(403).json({
    message: 'Not an applicant',
  })
}
