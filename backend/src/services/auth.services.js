import { prisma } from "../utils/db";
import { hashToken } from "../utils/hashToken.js";

export const addRefreshTokenToWhitelist = ({ jti, refreshToken, userId }) => {
  return prisma.refreshToken.create({
    data: {
      id: jti,
      hashedToken: hashToken(refreshToken),
      userId,
    },
  });
};

export const findRefreshTokenById = (id) => {
  return prisma.refreshToken.findUnique({
    where: { id },
  });
};

export const deleteRefreshToken = (id) => {
  return prisma.refreshToken.update({
    where: { id },
    data: {
      revoked: true,
    },
  });
};

export const revokeTokens = (userId) => {
  return prisma.refreshToken.updateMany({
    where: { userId },
    data: {
      revoked: true,
    },
  });
};
