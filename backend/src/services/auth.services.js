import { prisma } from '../utils/db'
import { hashToken } from '../utils/hashToken.js'

export const addRefreshTokenToWhitelist = ({ jti, refreshToken, userId }) => {
  return prisma.refreshToken.create({
    data: {
      id: jti,
      hashedToken: hashToken(refreshToken),
      userId,
    },
  })
}

export const findRefreshTokenById = (id) => {
  return prisma.refreshToken.findUnique({
    where: { id },
  })
}

export const deleteRefreshToken = (id) => {
  return prisma.refreshToken.delete({
    where: { id },
  })
}

export const revokeTokens = (userId) => {
  return prisma.refreshToken.deleteMany({
    where: { userId },
  })
}
