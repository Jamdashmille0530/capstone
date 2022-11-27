import { prisma } from '../utils/db'
import bcrypt from 'bcrypt'

export const findUserByRegisteredEmail = (email) => {
  return prisma.user.findFirst({
    where: {
      OR: [
        {
          email,
          role: 'ADMIN',
        },
        {
          email,
          role: 'SCHOLAR',
        },
      ],
    },
  })
}

export const findUserByEmail = (email) => {
  return prisma.user.findFirst({
    where: {
      email,
    },
  })
}

export const createUser = (user) => {
  return prisma.user.upsert({
    where: {
      email: user.email,
    },
    update: {
      ...user,
    },
    create: {
      ...user,
    },
  })
}

export const findUserById = (id) => {
  return prisma.user.findUnique({
    where: { id },
  })
}

export const updateUserData = (id, data) => {
  return prisma.user.update({
    where: { id },
    data,
  })
}

export const getAllUser = (id) => {
  return prisma.user.update({
    where: { id },
    data,
  })
}
