import useSWR from 'swr'
import { api } from './axios'
import { withToken } from './fetcher'

export const signUp = async (data) => {
  try {
    const resp = await api.post('/api/auth/register', data)

    const { accessToken, refreshToken, user } = resp.data
    localStorage.setItem('accessToken', accessToken)
    localStorage.setItem('refreshToken', refreshToken)
    // localStorage.setItem('user', JSON.stringify(user))
  } catch (e) {
    console.log(e)
  }
}

export const getUser = (id) => {
  const { data, error } = useSWR(`/api/user/${id}`)
  return {
    user: data?.user,
    isLoading: !error && !data,
    isError: error,
  }
}

export const updateUser = async (data) =>
  await api.post('/api/user/updateUser', data)

// para sa school, year, program
export const updateUserForTable = async (id, data) =>
  await api.put(`/api/user/${id}`, data)

export const me = (token) => {
  const { data, error } = useSWR(['/api/user/me', token], withToken)

  return {
    user: data?.user,
    isLoading: !error && !data,
    isError: error,
  }
}

export const getAllUserWithoutPass = () => {
  const { data, error } = useSWR('/api/user/getAllUserWithoutPass')

  return {
    users: data?.users,
    isLoading: !error && !data,
    isError: error,
  }
}

export const addFile = (data, endPoint) => {
  return api.put(`/api/user/image/${endPoint}`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  })
}
