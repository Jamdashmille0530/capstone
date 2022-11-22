import { prisma } from '../utils/db'

export const sendMessage = async (roomId, userId, message, image) => {
  return await prisma.messages.create({
    data: {
      roomId: roomId ?? '',
      userId: userId ?? '',
      message: message ?? '',
      image: image ?? '',
    },
  })
}

export const getMessages = async (roomId, page, limit) => {
  return await prisma.messages.findMany({
    where: {
      roomId,
    },
    orderBy: {
      created: 'asc',
    },
    skip: page,
    take: limit,
  })
}

export const getRooms = async () => {
  return await prisma.room.findMany({
    include: {
      user: true,
    },
  })
}

export const getUserRoom = async (userId) => {
  return await prisma.room.findFirst({
    where: {
      userId,
    },
  })
}

export const joinRoom = async (userId) => {
  let room = await prisma.room.findFirst({
    where: {
      userId,
    },
  })

  if (!room)
    room = await prisma.room.create({
      data: {
        userId,
      },
    })
  return room
}
