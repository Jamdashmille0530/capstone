import { api } from './axios'

export const getRoom = async (userId) => {
  try {
    const resp = await api.get(`/api/room/${userId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
    return resp.data
  } catch {
    return null
  }
}

export const getMessages = async (roomId, page, limit) => {
  try {
    const resp = await api.get(`/api/room/messages/${roomId}`, {
      params: {
        page,
        limit,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
    return resp.data
  } catch {
    return { data: [], count: 0 }
  }
}

export const getRooms = async (page, limit) => {
  try {
    const resp = await api.get(`/api/room`, {
      params: {
        page,
        limit,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
    return resp.data
  } catch {
    return { data: [], count: 0 }
  }
}
