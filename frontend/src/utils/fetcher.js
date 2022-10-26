import { api } from './axios'

export const fetcher = (url) => api.get(url).then((res) => res.data)

export const withToken = (url, token) =>
  api
    .get(url, { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => res.data)
