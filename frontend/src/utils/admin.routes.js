import useSWR from 'swr'
import { api } from './axios'

export const getAllUserInfo = () => {
  const { data, error, mutate } = useSWR('/api/admin/userInfo')
  return {
    users: data?.user,
    isLoading: !error && !data,
    isError: error,
    mutate,
  }
}

export const updateUserRole = async (userId, role) =>
  await api.put(`/api/admin/updateRole/${userId}`, { role })

export const acceptApplicant = async (id, email) =>
  await api.put('/api/user/acceptApplicant', { id, email })

export const rejectApplicant = async (id, email) =>
  await api.put('/api/user/rejectApplicant', { id, email })
