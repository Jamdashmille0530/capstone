import axios from 'axios'

import { refreshToken } from './auth.routes'

export const api = axios.create({
  baseURL: 'http://localhost:5000',
})

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status !== 401) return
    await refreshToken()
    return window.location.reload()
  }
)
