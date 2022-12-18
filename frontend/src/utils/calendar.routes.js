import { api } from './axios'

export const addEvent = async (data) => {
  const token = localStorage.getItem('accessToken')

  return await api.post('/api/calendar/add', data, {
    headers: { Authorization: `Bearer ${token}` },
  })
}

export const deleteEvent = async (id) =>
  await api.delete(`/api/calendar/delete/${id}`)

export const getEvent = async (start, end) =>
  await api.get(`/api/calendar?start=${start}&end=${end}`)
