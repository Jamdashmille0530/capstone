import { api } from './axios'

export const getRoom = async () => {
  try {
    const resp = await api.get(`/api/room`, {
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
    const resp = await api.get(`/api/room/${roomId}`, {
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
