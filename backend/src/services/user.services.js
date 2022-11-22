import { prisma } from '../utils/db'
import bcrypt from 'bcrypt'

export const findUserByEmail = (email) => {
  return prisma.user.findFirst({
    where: { email },
  })
}

export const createUser = (user) => {
  return prisma.user.create({
    data: user,
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
