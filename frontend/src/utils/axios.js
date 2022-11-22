import axios from 'axios'

import { refreshToken } from './auth.routes'

export const api = axios.create({
  baseURL: process.env.REACT_APP_URL,
})

export const apiRefresh = axios.create({
  baseURL: process.env.REACT_APP_URL,
})

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    try {
      if (error.response.status !== 401) return Promise.reject(error)
      await refreshToken()
      return api(error.config)
    } catch (err) {
      localStorage.clear()
      window.location.href = '/login'
    }
  }
)
