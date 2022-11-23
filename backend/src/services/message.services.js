import { prisma } from '../utils/db'

export const sendMessage = async (roomId, userId, message, image) => {
  const data = await prisma.messages.create({
    data: {
      roomId: roomId ?? '',
      userId: userId ?? '',
      message: message ?? '',
      image: image ?? '',
    },
  })

  await prisma.room.updateMany({
    where: {
      id: roomId,
    },
    data: {
      latest: data.id,
    },
  })

  return data
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

export const getRooms = async (page, limit) => {
  return await prisma.room.findMany({
    select: {
      user: {
        select: {
          id: true,
          fname: true,
          mname: true,
          lname: true,
          image: true,
        },
      },
      // message: {
      //   select: {
      //     message,
      //   },
      //   orderBy: {
      //     created: 'desc',
      //   },
      //   take: 1,
      // },
    },
    where: {
      user: {
        role: {
          not: 'ADMIN',
        },
      },
    },
    skip: page,
    take: limit,
    orderBy: {
      latestMessage: {
        created: 'desc',
      },
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
