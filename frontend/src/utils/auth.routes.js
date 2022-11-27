import { api, apiRefresh } from './axios'

export const loginUser = async (data) => {
  const resp = await api.post('/api/auth/login', data, {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  })
  const { accessToken, refreshToken, user } = resp.data
  localStorage.setItem('accessToken', accessToken)
  localStorage.setItem('refreshToken', refreshToken)
  localStorage.setItem('user', JSON.stringify(user))
  window.location.replace('/profile')
}

export const refreshToken = async () => {
  const data = localStorage.getItem('refreshToken')

  if (!data) return
  try {
    const resp = await apiRefresh.post(
      '/api/auth/refreshToken',
      { refreshToken: data },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        withCredentials: true,
      }
    )
    console.log('HEY', resp.data)
    const { accessToken, refreshToken: refresh } = resp.data
    localStorage.setItem('accessToken', accessToken)
    localStorage.setItem('refreshToken', refresh)
  } catch (e) {
    throw e
  }
}

// data = {userId: 3af425ca-5ffb-4d7b-9df8-7c51c49085bc}
export const logout = async (data) => {
  localStorage.removeItem('user')
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
  await api.post('/api/auth/revokedRefreshTokens', data)

  window.location.replace('/login')
}
